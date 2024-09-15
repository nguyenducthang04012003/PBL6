import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Login/LoginPage";
import Home from "./Component/HomepageComponent/Homepage";
import Forgotpassword from "./Component/ForgotPassword/Forgotpassword";
import ListUser from "./admin/ListUser/ListUser";
import TaskbarAdmin from "./Share/Taskbar_Left/TaskbarAdmin";
import ListPost from "./admin/ListPost/ListPost";
import Post from "./admin/ListPost/Post";
import UserProfile from "./admin/UserProfile/UserProfile";
import TextEditor from "./Component/UtilComponent/TextEditor";
import PostUser from "./admin/UserProfile/PostUser";
import AboutUser from "./admin/UserProfile/AboutUs";
import SettingUser from "./admin/UserProfile/SettingUs";
import Overview from "./admin/UserProfile/Overview";
import JobOverview from "./admin/UserProfile/JobOverview";
import AddressOver from "./admin/UserProfile/addressOver";

import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route cho trang chính và các trang không cần TaskbarAdmin */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgotpassword />} />
        <Route path="/text" element={<TextEditor />} />

        {/* Các route cho trang admin với TaskbarAdmin */}
        <Route path="/admin/*" element={
          <div className="admin-container">
            <TaskbarAdmin />
            <div className="admin-content">
              <Routes>
                <Route path="listUs" element={<ListUser />} />
                <Route path="listPo" element={<ListPost />} />
                <Route path="listPo/Post" element={<Post />} />
                <Route path="listUs/:email/*" element={<UserProfile />}>
                  <Route path="post" element={<PostUser />} />
                  <Route path="about/*" element={<AboutUser />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="work-education" element={<JobOverview />} />
                    <Route path="places-lived" element={<AddressOver />} />
                    <Route index element={<Navigate to="overview" replace />} />
                  </Route>
                  <Route path="setting" element={<SettingUser />} />
                  <Route index element={<Navigate to="post" replace />} />
                </Route>
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
