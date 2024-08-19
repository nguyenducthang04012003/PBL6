import React from 'react';
import './Login.css';

const Register = () => {
    return (
        <div className="form-container register-container">
            <form action="#">
                <h1>Register here.</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-enter password" />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;
