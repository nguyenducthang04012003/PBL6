import React, { useState } from 'react';
import './Login.css';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kiểm tra xem có bất kỳ trường nào còn trống không
        if (!name || !email || !password || !repassword) {
            setError('Please fill in all fields.');
        } else if (password !== repassword) { 
            setError('Passwords do not match.');
        } else {
            setError('');
            // In ra các giá trị
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            // Thực hiện các thao tác khác như gửi dữ liệu lên server
        }
    };
    

    return (
        <div className="form-container register-container">
            <form onSubmit={handleSubmit}> {/* Gán handleSubmit vào sự kiện onSubmit */}
                <h1 className='nick'>Sign Up here.</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
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
                <input 
                    type="password" 
                    placeholder="Repassword" 
                    value={repassword} 
                    onChange={(e) => setRepassword(e.target.value)} 
                />
                {error && <p style={{ color: '#440000', fontSize: '10px' }}>{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
