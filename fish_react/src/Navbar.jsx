import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MehOutlined,
  HomeOutlined,
  EditOutlined,
  UserOutlined,
  SignatureOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "./User";
import Btn from "./list/Btn";
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const { user, logout, isAuthenticating } = useAuth();

  if (isAuthenticating) {
    return <div>Loading...</div>;
  }

  const currentUser = user ? user.user_name : "";
  const user_fishfarm_num = user ? user.user_fishfarm_num : "";

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "13px 13px",
        fontSize: "20px",
      }}
    >
      <Menu.Item key="logo" style={{ marginRight: "auto" }} disabled>
        <img
          src="/img/title.png"
          alt="Logo"
          style={{ height: "50px", marginRight: "20px" }}
        />

        <span style={{ fontSize: "28px", fontWeight: "bold" , color:"#000000"}}>
          ESG!!養殖也要淨零~
        </span>
      </Menu.Item>

      {!user && (
        <Menu.Item
          key="login"
          icon={<MailOutlined style={{ fontSize: "15px" }} />}
        >
          <Link to="/">登入</Link>
        </Menu.Item>
      )}
      {user && (
        <Menu.Item
          key="FishNavigation"
          icon={<HomeOutlined style={{ fontSize: "25px" }} />}
        >
          <Link to="/FishNavigation">首頁</Link>
        </Menu.Item>
      )}
      {user && (
        <Menu.Item
          key="map"
          icon={<AppstoreOutlined style={{ fontSize: "25px" }} />}
        >
          <Link to="/map">地圖</Link>
        </Menu.Item>
      )}
      {user && (
        <Menu.Item
          key="education"
          icon={<EditOutlined style={{ fontSize: "25px" }} />}
        >
          <Link to="/education">教育</Link>
        </Menu.Item>
      )}
      {user && (
        <Menu.Item
          key="ReportDisplay"
          icon={<ReadOutlined style={{ fontSize: "25px" }} />}
        >
          <Link to="/ReportDisplay">永續報告書</Link>
        </Menu.Item>
      )}
      {user && <Btn />}
      {user && (
        <Menu.SubMenu
          key="userMenu"
          icon={<UserOutlined style={{ fontSize: "25px" }} />}
          title={`目前使用者: ${currentUser}`}
        >
          <Menu.ItemGroup title="選項">
            <Menu.Item key="logout">
              <Link to="/logout" onClick={logout}>
                登出
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      )}
      
    </Menu>
  );
};

export default Navbar;
