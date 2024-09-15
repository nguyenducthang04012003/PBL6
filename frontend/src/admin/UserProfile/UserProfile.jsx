import React from 'react';
import { Menu, Button } from 'antd';
import { Link, Outlet  } from 'react-router-dom';
import {
  ArrowLeftOutlined,
} from '@ant-design/icons';
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className='containerPro'>
      <div className='headProfile'>
        <div className='imgavt'>
          <div className='backListUs'>
            <a href="/admin/listUs" className='backLi'><ArrowLeftOutlined /></a>
          </div>
          <img src="/Image/background.jpg" alt="BackGround" className='imgbgr'/>
          <div className='avtvsname'>
            <img src="/Image/avtUs.jpg" alt="Avata" className='avtNa'/>
            <div className='nameUs'>
              <p className='nameUser'>Nguyen Duc Thang</p>
              <p className='friendUs'>299 Ban be</p>
            </div>
            {/* <div className='lockUs'>
              <Button className="btnLockUs">Lock</Button>
            </div> */}
          </div>
        </div>
        <div className='headMenu'>
          <Menu
            mode="horizontal"
            theme="light" // Hoặc "dark" tùy vào chủ đề bạn muốn
            style={{ lineHeight: '64px' }} // Tùy chỉnh chiều cao của menu
          >   
            <Menu.Item key="1">
              <Link to="post">Bài viết</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="about">Giới thiệu</Link>
            </Menu.Item>
            <Menu.Item key="3" className='last-menu-item'>
              <Link to="setting">Cài đặt</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className='bodyProfleUs'>
          <Outlet /> {/* Nội dung sẽ thay đổi dựa trên đường dẫn con */}
        </div>
    </div>
  );
}

export default UserProfile;
