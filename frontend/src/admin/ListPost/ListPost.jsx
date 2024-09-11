import React, {useState} from 'react';
import { Table, Button, Input, Modal } from 'antd';
import { SearchOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import {
  successNotification,
  errorNotification,
  warningNotification,
} from '../../Share/Notification/Notification';
import "./ListPost.css";

function ListPost(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dataSource = [
      {
        id: '001',
        email: 'mike@example.com',
        content: 'Gender: Nam, Phone: +1234567890, Role: Quản trị viên, Status: Chưa khóa'
      },
      {
        id: '002',
        email: 'john@example.com',
        content: 'Gender: Nữ, Phone: +0987654321, Role: Người dùng, Status: Đã khóa'
      },
      {
        id: '003',
        email: 'alice@example.com',
        content: 'Gender: Nữ, Phone: +1122334455, Role: Quản trị viên, Status: Chưa khóa'
      },
      {
        id: '004',
        email: 'bob@example.com',
        content: 'Gender: Nam, Phone: +2233445566, Role: Người dùng, Status: Đã khóa'
      },
      {
        id: '005',
        email: 'charlie@example.com',
        content: 'Gender: Nam, Phone: +3344556677, Role: Người dùng, Status: Chưa khóa'
      },
      {
        id: '006',
        email: 'diana@example.com',
        content: 'Gender: Nữ, Phone: +4455667788, Role: Người dùng, Status: Đã khóa'
      },
      {
        id: '007',
        email: 'eva@example.com',
        content: 'Gender: Nữ, Phone: +5566778899, Role: Quản trị viên, Status: Chưa khóa'
      },
      {
        id: '008',
        email: 'frank@example.com',
        content: 'Gender: Nam, Phone: +6677889900, Role: Người dùng, Status: Đã khóa'
      },
      {
        id: '009',
        email: 'grace@example.com',
        content: 'Gender: Nữ, Phone: +7788990011, Role: Quản trị viên, Status: Chưa khóa'
      },
      {
        id: '010',
        email: 'henry@example.com',
        content: 'Gender: Nam, Phone: +8899001122, Role: Người dùng, Status: Đã khóa'
      },
      {
        id: '011',
        email: 'isabel@example.com',
        content: 'Gender: Nữ, Phone: +9900112233, Role: Quản trị viên, Status: Chưa khóa'
      }
  ];

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'id',
      key: 'id',
      align: "left",
      sorter: (record1, record2) => record1.id > record2.id,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: "left",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            autoFocus
            placeholder="Nhập từ khóa"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={confirm}
            onBlur={confirm}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            onClick={confirm}
            icon={<SearchOutlined />}
            size="small"
            style={{ marginRight: 8, width: 90 }}
            type="primary"
          >
            Tìm kiếm
          </Button>
          <Button
            onClick={clearFilters}
            size="small"
            style={{ marginRight: 8, width: 90 }}
          >
            Đặt lại
          </Button>
          <Button type="link" size="small" onClick={close}>
            Đóng
          </Button>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record.email.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      key: 'content',
      align: "left",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            autoFocus
            placeholder="Nhập từ khóa"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={confirm}
            onBlur={confirm}
            style={{ marginBottom: 8, display: "block" }}
          />
          <Button
            onClick={confirm}
            icon={<SearchOutlined />}
            size="small"
            style={{ marginRight: 8, width: 90 }}
            type="primary"
          >
            Tìm kiếm
          </Button>
          <Button
            onClick={clearFilters}
            size="small"
            style={{ marginRight: 8, width: 90 }}
          >
            Đặt lại
          </Button>
          <Button type="link" size="small" onClick={close}>
            Đóng
          </Button>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record.content.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Tùy chọn',
      key: 'action',
      align: 'left',
      render: (text, record) => (
        <div className="buttonContainer">
          <Link className="btnView" to='/admin/listPo/Post'>
            View
          </Link>
          <Link className="btnDele" to='/admin/listPo/Post'>
            Delete
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className='List-container'>
      <div className='txtcontai'>
        <p className='txt-listUs'>Danh sách người dùng Trinity</p>  
      </div>
      <div className='tbl-listUs'>
        <Table 
          dataSource={dataSource} 
          columns={columns} 
          pagination={{
            current: page,
            pageSize: 10,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </div>
  );
}

export default ListPost;
