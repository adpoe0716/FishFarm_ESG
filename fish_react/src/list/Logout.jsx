import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../User';

function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {

        localStorage.removeItem('token');
        logout();


        toast.success("登出成功");

        const timer = setTimeout(() => {
            navigate('/');
        }, 2000);

        return () => clearTimeout(timer);
    }, [logout, navigate]);

    return (
        <div>
            {/* 渲染 ToastContainer 以顯示登出成功的消息 */}
            {/* <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}
        </div>
    );
}

export default Logout;
