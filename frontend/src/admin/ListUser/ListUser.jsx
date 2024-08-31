import React, {useState} from 'react';
import { Table, Button, Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import "./ListUser.css"

function ListUser(props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dataSource = [
    {
      key: '1',
      id: '001',
      email: 'mike@example.com',
      gender: 'Nam',
      birthday: '1992-03-15',
      phone: '+1234567890',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '2',
      id: '002',
      email: 'john@example.com',
      gender: 'Nữ',
      birthday: '1982-07-22',
      phone: '+0987654321',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '3',
      id: '003',
      email: 'alice@example.com',
      gender: 'Nữ',
      birthday: '1995-01-30',
      phone: '+1122334455',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '4',
      id: '004',
      email: 'bob@example.com',
      gender: 'Nam',
      birthday: '1988-04-12',
      phone: '+2233445566',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '5',
      id: '005',
      email: 'charlie@example.com',
      gender: 'Nam',
      birthday: '1990-06-25',
      phone: '+3344556677',
      role: 'Người dùng',
      status: 'Chưa khóa',
    },
    {
      key: '6',
      id: '006',
      email: 'diana@example.com',
      gender: 'Nữ',
      birthday: '1993-08-18',
      phone: '+4455667788',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '7',
      id: '007',
      email: 'eva@example.com',
      gender: 'Nữ',
      birthday: '1985-12-05',
      phone: '+5566778899',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '8',
      id: '008',
      email: 'frank@example.com',
      gender: 'Nam',
      birthday: '1991-09-17',
      phone: '+6677889900',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '9',
      id: '009',
      email: 'grace@example.com',
      gender: 'Nữ',
      birthday: '1989-02-14',
      phone: '+7788990011',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
    {
      key: '10',
      id: '010',
      email: 'henry@example.com',
      gender: 'Nam',
      birthday: '1994-11-11',
      phone: '+8899001122',
      role: 'Người dùng',
      status: 'Đã khóa',
    },
    {
      key: '11',
      id: '011',
      email: 'isabel@example.com',
      gender: 'Nữ',
      birthday: '1997-05-20',
      phone: '+9900112233',
      role: 'Quản trị viên',
      status: 'Chưa khóa',
    },
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
      title: 'Ngày sinh',
      dataIndex: 'birthday',
      key: 'birthday',
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
  ];

  return (
    <div>
      <div className='txtcontai'>
        <p className='txt-listUs'>Danh sách người dùng Trinity</p>  
      </div>
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={{
        current: page,
        pageSize: 7,
        onChange: (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        },
      }}
      />
    </div>
  );
}

export default ListUser;
