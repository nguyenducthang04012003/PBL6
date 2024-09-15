import React from 'react';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';  // Import Link và Outlet từ react-router-dom
import "./AboutUs.css"

function AboutUs(props) {
  return (
    <div className='aboutUs'>
      <div className='profileMenu'>
        <h3 className='menuTitle'>Giới thiệu</h3>
        <Menu
          mode="vertical"
          theme="dark"
          defaultSelectedKeys={['1']}
          className="customMenu"
        >
          <Menu.Item key="1">
            <Link to="overview">Tổng quan</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="work-education">Công việc và học vấn</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="places-lived">Nơi từng sống</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="contact-info">Thông tin liên hệ và cơ bản</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="family-relationships">Mối quan hệ</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="divider"></div>
      <div className='contentAbout'>
        {/* Outlet để hiển thị nội dung dựa trên đường dẫn */}
        <Outlet />
      </div>
    </div>
  )
}

export default AboutUs;
