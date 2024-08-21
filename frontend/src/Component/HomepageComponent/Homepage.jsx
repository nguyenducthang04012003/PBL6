import React from 'react';
import './Homepage.css';
const Homepage = () => {
    return (
        <div className="home-container">
            <div className='head-home'>
                <div>
                    <p className='nick-name'>Trinity</p>
                </div>
                <div className='btnLo'>
                    <button className='Home'>Login</button>
                    <button className='Home'>SignUp</button>
                </div>
            </div>
            <div className='content-home'>
                <div className='head-content'>
                    <div className='text-head'>
                        <h1 className='first'>Kết nối và chia sẻ</h1>
                        <p>Trang mạng xã hội trò chuyện để kết nối và chia sẻ với mọi người. 
                        Thách thức bản thân qua các nhiệm vụ và chia sẻ câu chuyện của bạn.</p>
                        <p className='reminder'>“Nhanh chóng và hoạt động hoàn hảo mỗi lần.”</p>
                        <p className='note'>--Jack Brown--</p>
                    </div>
                    <div className='img-head'>
                        <img src="/Image/giaotiep.jpg" alt="hllll" className='imgHo'/>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Homepage;
