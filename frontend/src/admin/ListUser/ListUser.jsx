import React, {useState} from 'react';
import { Table, Button, Input, Modal } from 'antd';
import { SearchOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import "./ListUser.css"
import {
  successNotification,
  errorNotification,
  warningNotification,
} from '../../Share/Notification/Notification';

function ListUser(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dataSource = [
    {
      key: '1',
      id: '001',
      email: 'mike@example.com',
      gender: 'Nam',
      phone: '+1234567890',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '2',
      id: '002',
      email: 'john@example.com',
      gender: 'Nữ',
      phone: '+0987654321',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '3',
      id: '003',
      email: 'alice@example.com',
      gender: 'Nữ',
      phone: '+1122334455',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '4',
      id: '004',
      email: 'bob@example.com',
      gender: 'Nam',
      phone: '+2233445566',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '5',
      id: '005',
      email: 'charlie@example.com',
      gender: 'Nam',
      phone: '+3344556677',
      role: 'Người dùng',
      status: 'Chưa khóa',
    },
    {
      key: '6',
      id: '006',
      email: 'diana@example.com',
      gender: 'Nữ',
      phone: '+4455667788',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '7',
      id: '007',
      email: 'eva@example.com',
      gender: 'Nữ',
      phone: '+5566778899',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '8',
      id: '008',
      email: 'frank@example.com',
      gender: 'Nam',
      phone: '+6677889900',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '9',
      id: '009',
      email: 'grace@example.com',
      gender: 'Nữ',
      phone: '+7788990011',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '10',
      id: '010',
      email: 'henry@example.com',
      gender: 'Nam',
      phone: '+8899001122',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '11',
      id: '011',
      email: 'isabel@example.com',
      gender: 'Nữ',
      phone: '+9900112233',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
  ];

  const handleViewProfile = (record) => {
    // Thực hiện logic khi xem chi tiết người dùng
    console.log("Xem chi tiết người dùng:", record);
    alert(`Chi tiết người dùng: \nID: ${record.id}\nEmail: ${record.email}`);
  };

  const showModal = (record) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (selectedUser) {
      if (selectedUser.status === 'Đã khóa') {
        // Nếu tài khoản đã bị khóa, hiển thị thông báo cảnh báo
        warningNotification(
          "Tài khoản đã bị khóa", 
        );
      } else {
        // Nếu tài khoản chưa bị khóa, thực hiện khóa tài khoản và hiển thị thông báo thành công
        console.log("Đã khóa tài khoản người dùng:", selectedUser);
        successNotification(
          "Khóa tài khoản thành công", 
        );
        // Cập nhật trạng thái của tài khoản
        const updatedDataSource = dataSource.map(user => 
          user.key === selectedUser.key 
          ? { ...user, status: 'Đã khóa' } 
          : user
        );
        // Cập nhật lại dữ liệu nguồn của bảng (nếu cần thiết)
        // setDataSource(updatedDataSource);
      }
      
      // Đóng modal và reset trạng thái
      setIsModalVisible(false);
      setSelectedUser(null);
    } else {
      errorNotification(
        "Khóa tài khoản thất bại", 
      );
    }
  };
  
  const handleCancel = () => {
    console.log("Đóng modal mà không khóa tài khoản");
    setIsModalVisible(false);
  };

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
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      align: "left",
      render: (gender) => <p>{gender}</p>,
      filters: [
        { text: "Nam", value: "Nam" },
        { text: "Nữ", value: "Nữ" },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: 'Điện thoại',
      dataIndex: 'phone',
      key: 'phone',
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
      onFilter: (value, record) => record.phone.includes(value),
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      align: "left",
      render: (role) => <p>{role}</p>,
      filters: [
        { text: "Quản trị viên", value: "Quản trị viên" },
        { text: "Người dùng", value: "Người dùng" },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: "left",
      render: (status) => <p>{status}</p>,
      filters: [
        { text: "Đã khóa", value: "Đã khóa" },
        { text: "Chưa khóa", value: "Chưa khóa" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Tùy chọn',
      key: 'action',
      align: 'left',
      render: (text, record) => (
        <div className="buttonContainer">
          <Button
            className="btnPrf"
            onClick={() => handleViewProfile(record)}
          >
            <UserOutlined />
          </Button>
          <Button
            className="btnDel"
            onClick={() => showModal(record)}
          >
            <LockOutlined />
          </Button>
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

      <Modal 
        title="Xác nhận khóa tài khoản" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn khóa tài khoản của người dùng {selectedUser?.email} không?</p>
      </Modal>
    </div>
  );
}

export default ListUser;
