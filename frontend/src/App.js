import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Component/Login/LoginPage";
import Home from "./Component/HomepageComponent/Homepage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
