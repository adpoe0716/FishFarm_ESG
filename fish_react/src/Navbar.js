import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAuth } from './User';
import './Navbar.css'
const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const { user, logout, isAuthenticating } = useAuth();

    if (isAuthenticating) {
        return <div>Loading...</div>;
    }

    const currentUser = user ? user.user_name : '';
    const user_fishfarm_num = user ? user.user_fishfarm_num : '';

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        !user && {
            label: <Link to="/">登入</Link>,
            key: 'login',
            icon: <MailOutlined />,
            iconSize:'90px',
        },
        user && {
            label: <Link to="/map">地圖</Link>,
            key: 'map',
            icon: <AppstoreOutlined />,
        },
        user && {
            key: 'userMenu',
            icon: <SettingOutlined />,
            label: `目前使用者: ${currentUser}`,
            children: [
                {
                    type: 'group',
                    label: '選項',
                    children: [
                        {
                            label: <Link to="/logout" onClick={logout}>登出</Link>,
                            key: 'logout',
                        },
                    ],
                },
            ],
        },
    ].filter(Boolean); // 过滤掉不需要的项

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            
            style={{ backgroundColor: '#8EE3EF', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', padding: '10px 30px', fontSize: '20px' }} 
        />
    );
};

export default Navbar;
