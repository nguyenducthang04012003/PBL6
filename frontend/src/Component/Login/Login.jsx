import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    // Tạo state để lưu trữ giá trị của email và password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hàm xử lý khi người dùng nhấn nút "Login"
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra xem email và password có được nhập hay không
        if (!email || !password) {
            setError('Please fill in both email and password.');
        } else {
            setError('');
            // Thực hiện các thao tác khác sau khi kiểm tra thành công, ví dụ như gửi dữ liệu lên server
            console.log('email:', email);
            console.log('Mat khau:', password);
        }
    };

    return (
        <div className="form-container login-container">
            <form onSubmit={handleSubmit}>
                <h1 className='nick'>Login here.</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {error && <p style={{ color: '#440000', fontSize: '10px' }}>{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}
                <div className="content">
                    <a href="/forgot" className="pass-link">Forgot password?</a>
                </div>
                <button className='btnLo' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
