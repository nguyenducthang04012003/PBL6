import React from "react";
import "./Login.css";

const Login = props => {
    return (
        <>
            <div className="login-container">
                <div className="login-logo">
                    <div className="logo-container">
                        <img className="logo-image" src="/meo.png" alt="Logo" />
                    </div>
                    <h2>ĐĂNG NHẬP</h2>
                </div>
            </div>
        </>
    );
};

export default Login;
