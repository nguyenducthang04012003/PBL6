import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="form-container login-container">
            <form action="#">
                <h1 className='nick'>Login here.</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <div className="content">
                    <a href="#" className="pass-link">Forgot password?</a>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
