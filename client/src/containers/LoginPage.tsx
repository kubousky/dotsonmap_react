import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../hooks';
import { resetRegistered, login, selectUser } from '../features/auth';
import { toast } from 'react-toastify';

const initialState = {
  email: "",
  password: "",
}

const LoginPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetRegistered());
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const {email, password} = formData;

  const {isAuthenticated, loading} = useAppSelector(selectUser);


  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    
    dispatch(login({ email, password}));
  }

  if (isAuthenticated) {
  
    return <Navigate to='/dashboard'/>
  }

  return (
    <Layout>
      <section className="vh-100 gradient-custom">
          <div className="container py-4 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                          <div className="card-body p-4 text-center">
                            <form onSubmit={handleLogin }>
                              <div className="mb-md-5 mt-md-4 pb-5">
                                  <h2 className="fw-bold mb-2 text-uppercase">
                                      Login
                                  </h2>
                                  <p className="text-white-50 mb-4">
                                      Please enter User email & password
                                  </p>

                                  <div className="form-outline form-white mb-4">
                                      <input
                                      type="email"
                                      name="email"
                                      value={email}
                                      onChange={handleChange}
                                      placeholder="Email"
                                      className="form-control form-control-lg"
                                      />
                                  </div>
                                  <div className="form-outline form-white mb-4">
                                      <input
                                      type="password"
                                      name="password"
                                      value={password}
                                      onChange={handleChange}
                                      placeholder="Password"
                                      className="form-control form-control-lg"
                                      />
                                  </div>


                                {loading ? (
                                  <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </div> 

                                ) : (

                                  <button 
                                    className="btn btn-outline-light btn-lg px-5"
                                  >
                                    Login
                                  </button>
                                  )}
                                 
                              </div>
                            </form>
                              <div>
                                <h5 className="mb-0">

                                  Have no account yet? 
                                  <p
                                    className="text-white-50 fw-bold"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate("/register")}>Register
                                  </p>

                                </h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export default LoginPage