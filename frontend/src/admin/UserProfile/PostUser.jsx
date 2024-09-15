import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {
  SettingOutlined,
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import "./PostUser.css";

function PostUser(props) {
  // State quản lý modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Hàm mở modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Hàm đóng modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='containerPostUs'>
      <div className='PostUser'>
        <div className='headPost'>
          <img src="/Image/avtUs.jpg" alt="avata" className='avtPostUser'/>
          <p className='namePostUser'>Nguyen Duc Thang</p>
          <Button className='btnPostUs' onClick={showModal}>
            <SettingOutlined />
          </Button>
        </div>
        <div className='contentPostUs'>
          <p className='tusPostUs'>
            Thì ngại gì không nhận 1 vai
            Đúng thì nai mà sai thì cáo
            Cuộc đời nó láo
            Mình bát nháo để thêm vui
          </p>
          <img src="/Image/giaotiep.jpg" alt="Post" className='imgPostUs'/>
        </div>
        <hr />
        <div className='iconPostUs'>
          <Button className='btnPostUser' id='noneClick'>
            <LikeOutlined />Like
          </Button>
          <Button className='btnPostUser'>
            <CommentOutlined />Comment
          </Button>
          <Button className='btnPostUser' id='noneClick'>
            <ShareAltOutlined />Share
          </Button>
        </div>
      </div>

      {/* Modal hiển thị khi nhấn vào nút Setting */}
      <Modal 
        title="Cài đặt bài viết" 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        className='modalSettingPost'
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Save Changes
          </Button>,
        ]}
      >
        <p>Nội dung cấu hình bài viết...</p>
      </Modal>
    </div>
  );
}

export default PostUser;
