import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux"; 

import DashboardPage from "./containers/DashboardPage";
import Homepage from "./containers/Homepage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
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