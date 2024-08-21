import React, { useEffect } from 'react';
import './Login.css';
import Login from './Login';
import Register from './Register';

const LoginPage = () => {
    useEffect(() => {

        // Lấy các phần tử HTML
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");
        const container = document.getElementById("container");

        // Thêm sự kiện click cho nút đăng ký
        registerButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        // Thêm sự kiện click cho nút đăng nhập
        loginButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            document.body.classList.remove('login-body');
            registerButton.removeEventListener("click", () => {
                container.classList.add("right-panel-active");
            });
            loginButton.removeEventListener("click", () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []); // Chạy effect chỉ khi component mount và unmount

    return (
        <div className="login-body">
            <div className="container" id="container">
                <Login />
                <Register />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="title">Hello <br /> friends</h1>
                            <p className='note'>If you have an account, login here and have fun</p>
                            <button className="ghost" id="login">Login
                                <i className="lni lni-arrow-left login"></i>
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="title">Start your <br /> journey now</h1>
                            <p className='note'>If you don't have an account yet, join us and start your journey.</p>
                            <button className="ghost" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
