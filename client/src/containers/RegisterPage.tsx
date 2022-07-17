import { useState } from "react";
import Layout from '../components/Layout';
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks';
import { register, selectUser } from '../features/user';

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}


const RegisterPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);



  const {name, email, password, confirmPassword} = formData;

  const {registered, loading} = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})

  };

  const handleRegister = (e: any) => {
    e.preventDefault();

    
    if(password !== confirmPassword) {
      return toast.error("Password don't match")
  }
    if(name && email && password) {
      dispatch(register({email, password, name}));
      toast.success("User Login Succesfully");
    } else {
      toast.error("Please fill all Input field")
  }
  }



  if (registered) {
  
    return <Navigate to='/login'/>
  }

  return (
    <Layout>

      <section className="vh-100 gradient-custom">
          <div className="container py-4 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                          <div className="card-body p-4 text-center">
                            <form onSubmit={handleRegister}>
                              <div className="mb-md-5 mt-md-4 pb-5">
                                  <h2 className="fw-bold mb-2 text-uppercase">
                                      Register
                                  </h2>
                                  <p className="text-white-50 mb-4">
                                      Please enter User details
                                  </p>
                                    <div className="form-outline form-white mb-4">
                                      <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className="form-control form-control-lg"
                                      />
                                    </div>
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
                                  <div className="form-outline form-white mb-4">
                                    <input
                                      type="password"
                                      name="confirmPassword"
                                      value={confirmPassword}
                                      onChange={handleChange}
                                      placeholder="Confirm Password"
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
                                    Register
                                  </button>
                                  )}
                                 
                              </div>
                            </form>
                              <div>
                                <h5 className="mb-0">

                                  Already have an account? 
                                  <p
                                    className="text-white-50 fw-bold"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate("/login")}>Sign In
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

export default RegisterPage;