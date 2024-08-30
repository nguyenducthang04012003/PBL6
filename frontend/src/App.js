import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/LoginPage";
import Home from "./Component/HomepageComponent/Homepage";
import Forgotpassword from "./Component/ForgotPassword/Forgotpassword";
import ListUser from "./admin/ListUser/ListUser";
import TaskbarAdmin from "./Share/Taskbar_Left/TaskbarAdmin";
import ListPost from "./admin/ListPost/ListPost";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Home and other pages that do not need TaskbarAdmin */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgotpassword />} />

        {/* Routes for admin pages with TaskbarAdmin */}
        <Route path="/admin/*" element={
          <div className="admin-container">
            <TaskbarAdmin />
            <div className="admin-content">
              <Routes>
                <Route path="listUs" element={<ListUser />} />
                <Route path="listPo" element={<ListPost />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
