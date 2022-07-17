import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux"; 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from "./containers/DashboardPage";
import Homepage from "./containers/Homepage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/dashboard' element={ <DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
)}

export default App;