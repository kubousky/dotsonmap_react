import { useState } from "react";
import Layout from '../components/Layout';
import { Navigate } from "react-router-dom";
import { MDBInput} from "mdb-react-ui-kit";
import { useAppDispatch, useAppSelector } from '../hooks';
import { register, selectUser } from '../features/user';

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const RegisterPage = () => {
  const [formData, setFormData] = useState(initialState);

  const {name, email, password, confirmPassword} = formData;
  const [showRegister, setShowRegister] = useState(false);

  const {registered, loading} = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
     
    dispatch(register({email, password, name}));
  }


  if (registered) {
    return <Navigate to='/login'/>
  }

  return (
    <Layout>
          <form onSubmit={onSubmit} className="mt-5">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
              <MDBInput
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  label="Name"
                  className="form-control form-control-lg"
                />
              </label>

              <label htmlFor="email" className="form-label">
              <MDBInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="Email"
                  className="form-control form-control-lg"
                />
              </label>
              <label htmlFor="password" className="form-label">
              <MDBInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  label="Password"
                  className="form-control form-control-lg"
                />
              </label>
              {/* <button 
                  className="btn btn-outline-light btn-lg px-5" 
                  type="button"
              >
                  Register
              </button> */}
              <button className='btn btn-primary mt-4'>Register</button>
            </div>

          </form>

    </Layout>
  )
}

export default RegisterPage;