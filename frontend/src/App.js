import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Component/Login/LoginPage";
import Home from "./Component/HomepageComponent/Homepage"
import Forgotpassword from "./Component/ForgotPassword/Forgotpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Home/>} />
        <Route path="/forgot" element={<Forgotpassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
