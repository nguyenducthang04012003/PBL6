import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './TaskbarAdmin.css'; // Import CSS file

const TaskbarAdmin = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  const items = [
    {
      key: '1',
      icon: <MailOutlined />,
      label: (
        <Link className="link" to="/admin/listUs">
          Danh sách người dùng
        </Link>
      ),
    },
    {
      key: 'sub1',
      label: 'Danh sách bài viết',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '2',
          icon: <CloseCircleOutlined />,
          label: (
            <Link className="pass-link" to="/admin/listPo">
              Bài viết chưa duyệt
            </Link>
          ),
        },
        {
          key: '3',
          icon: <CheckCircleOutlined />,
          label: 'Bài viết đã duyệt',
        },
      ],
    },
    {
      key: '4',
      icon: <MailOutlined />,
      label: (
        <Link className="pass-link" to="/forgot">
          Hồ sơ cá nhân
        </Link>
      ),
    },
  ];

  return (
    <div className="taskbar-container">
      <Menu
        style={{
          width: 256,
          height: 'calc(100vh - 48px)', 
          overflowY: 'auto',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
      <Link to="/" className="pass-link signout">
        <LogoutOutlined /> Sign Out
      </Link>
    </div>
  );
};

export default TaskbarAdmin;
