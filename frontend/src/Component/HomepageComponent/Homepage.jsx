import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom'; 

const Homepage = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleLoginClick = () => {
        navigate('/Login'); // Chuyển hướng đến trang /Login
    };

    return (
        <div className="home-container">
            <div className='head-home'>
                <div>
                    <p className='nick-name'>Trinity</p>
                </div>
                <button className='btnLo Home' onClick={handleLoginClick}>Login/SignUp</button> {/* Thêm sự kiện onClick */}
            </div>
            <div className='content-home'>
                <div className='head-content'>
                    <div className='text-head'>
                        <p className='first'>Kết nối và chia sẻ</p>
                        <p style={{ marginTop: 20 }}>Trang mạng xã hội trò chuyện để kết nối và chia sẻ với mọi người. 
                        Thách thức bản thân qua các nhiệm vụ và chia sẻ câu chuyện của bạn.</p>
                        <button className='btnLo Home' id='Truycap' onClick={handleLoginClick}>Truy cập ngay</button> {/* Thêm sự kiện onClick */}
                        <p className='reminder'>“Nhanh chóng và hoạt động hoàn hảo mỗi lần.”</p>
                        <p style={{ fontStyle: "italic" }}>--Jack Brown--</p>
                    </div>
                    <div className='img-head'>
                        <img src="/Image/moinguoi.png" alt="imghome1" className='imgHo'/>
                    </div>
                </div>
                
                <p className='title'>"Cộng đồng kết nối và chia sẻ - nơi mỗi câu chuyện đều đáng được kể!"</p>
                <p className='title2'>Trang mạng xã hội trò chuyện để kết nối và chia sẻ với mọi người.</p>

                <div className='head-content'>
                    <div className='img-body'>
                        <img src="/Image/imghome1.png" alt="imghome2" className='imgHo'/>
                    </div>
                    <div className='text-body'>
                        <p className='second'>Thiết kế trang dễ dàng</p>
                        <p style={{ marginTop: 20 }}>Trang mạng xã hội trò chuyện để kết nối và chia sẻ với mọi người. 
                        Thách thức bản thân qua các nhiệm vụ và chia sẻ câu chuyện của bạn.</p>
                    </div>
                </div>

                <div className='head-content'>
                    <div className='text-head'>
                        <p className='second'>Giao tiếp nhanh chóng</p>
                        <p style={{ marginTop: 20 }}>Các công liên lạc như gọi điện, nhắn tin được ứng dụng ngay trên trang web để
                        mọi người dễ dàng sử dụng.</p>
                    </div>
                    <div className='img-head'>
                        <img src="/Image/imghome4.png" alt="imghome1" className='imgHo'/>
                    </div>
                </div>


                <div className='head-content'>
                    <div className='img-body'>
                        <img src="/Image/imghome2.png" alt="imghome2" className='imgHo'/>
                    </div>
                    <div className='text-body'>
                        <p className='second'>Học hỏi và phát triển</p>
                        <p style={{ marginTop: 20 }}>Cung cấp cơ hội học hỏi thông qua các nhóm, 
                        diễn đàn và các khóa học trực tuyến.</p>
                    </div>
                </div>

                <div className='bottom-content'>
                    <div className='text-bottom'>
                        <p className='trip'>Được cộng đồng tin tưởng</p>
                        <p className='texttrip'>“Mạng Xã Hội Trò Chuyện là một trong những dịch vụ tốt nhất tôi từng sử dụng. </p>
                        <p className='texttrip'>Trang của tôi được chăm sóc cẩn thận và chuyên nghiệp.” - Yan Scott</p>
                    </div>
                    <button className='btnLo Home' id='Truycapbottom' onClick={handleLoginClick}>Truy cập trang</button> {/* Thêm sự kiện onClick */}
                </div>
            </div>
        </div> 
    );
};

export default Homepage;
