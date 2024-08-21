import React from 'react';
import './Login.css';

const Register = () => {
    return (
        <div className="form-container register-container">
            <form action="#">
                <h1 className='nick'>Sign Up here.</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-enter password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
