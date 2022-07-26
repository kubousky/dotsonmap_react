import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from './hooks';
import { checkAuth } from './features/auth';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from "./containers/DashboardPage";
import Homepage from "./containers/Homepage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";



const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
      <Router>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/dashboard' element={ <DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
)}

export default App;