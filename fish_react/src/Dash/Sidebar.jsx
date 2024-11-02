import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  HomeOutlined,
  DotChartOutlined,
  AreaChartOutlined,
  SaveOutlined,
  ReadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SignatureOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const { Sider } = Layout;

const Sidebar = ({ num }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "1",
      icon: <HomeOutlined className="menu-icon" />,
      label: <Link to={`/topics/${num}`} className="menu-label">魚塭資訊</Link>,
    },
    {
      key: "2",
      icon: <DotChartOutlined className="menu-icon" />,
      label: <Link to={`/water/${num}`} className="menu-label">水況</Link>,
    },
    {
      key: "3",
      icon: <AreaChartOutlined className="menu-icon" />,
      label: <Link to={`/emission/${num}`} className="menu-label">排放</Link>,
    },
    {
      key: "4",
      icon: <ReadOutlined className="menu-icon" />,
      label: <Link to={`/Suggestion/${num}`} className="menu-label">營運建議</Link>,
    },
  ];

  return (
    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={200}
      className="sider-container"
      style={{ backgroundColor: '#F5F5F5' }}  // 确保折叠时背景颜色不变
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className="sider-toggle-button"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className="sider-content">
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="Dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
