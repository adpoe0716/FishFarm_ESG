import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Card, Row, Col, Select } from "antd";
import axios from "axios";
import { useAuth } from "../User";
import "./FishNavigation.css";

const { Header, Content } = Layout;
const { Option } = Select;

const FishNavigation = () => {
  const { user, user_id, logout, isAuthenticating } = useAuth();
  const currentUser = user ? user.user_name : "";
  const currentUser_id = user ? user.user_id : 999; // 若無 user_id 則設為 999
  //   console.log(currentUser_id);
  const [fishPonds, setFishPonds] = useState([]);
  const [sortOption, setSortOption] = useState(null); // 儲存排序方式
  const navigate = useNavigate();

  useEffect(() => {
    const user_fishfarm = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user_fishfarm",
          { user: currentUser_id }
        );

        if (response) {
          //   console.log("Data received from server:", response.data);
          setFishPonds(response.data); // 更新狀態
        }
      } catch (error) {
        console.error("Error fetching fish farm data:", error);
      }
    };

    if (user && !isAuthenticating) {
      user_fishfarm();
    }
  }, [user, isAuthenticating]);

  useEffect(() => {
    if (fishPonds.length > 0) {
      //   console.log("Updated fishPonds:", fishPonds);
    }
  }, [fishPonds]);

  const handleSortChange = (value) => {
    setSortOption(value);
    // 這裡可以加入排序邏輯，但現在不需要
    console.log("Selected sort option:", value);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "#e0f7fa",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          position: "relative",
          zIndex: 100,
        }}
      >
        {/* 使用 Flexbox 來排版下拉選單和標題 */}
        <div className="header-content">
          <h1 style={{ color: "#333" }}>
            目前身分: {currentUser}
            {/* 目前身分: {currentUser} 可觀看魚塭數量: {fishPonds.length} */}
          </h1>
          {currentUser_id === 0 && (
            <div className="sort-select">
              <Select
                className="custom-select"
                style={{ width: 200 }}
                placeholder="選擇排序方式"
                onChange={handleSortChange}
              >
                <Option value="date">依照日期排序</Option>
                <Option value="species">依照魚種排序</Option>
                <Option value="type">依照魚塭類型排序</Option>
              </Select>
            </div>
          )}
        </div>
      </Header>
      <Content className="content">
        <Row gutter={[16, 32]} justify="center">
          {fishPonds.flat().map((pond) => (
            <Col key={pond.fishfarm_ID} xs={24} sm={12} md={8} lg={6}>
              <div className="card-wrapper">
                <Card
                  hoverable
                  cover={
                    <img
                      alt={`${pond.Species} - ${pond.type} - ${pond.Manager}`}
                      src={`/img/fishpondPNG${pond.photo_id}.jpg`}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                  title={
                    <div>{`${pond.Species} - ${pond.type} - ${pond.Manager}`}</div>
                  }
                  style={{ width: "100%" }}
                  onClick={() => navigate(`/topics/${pond.photo_id}`)}
                >
                  <p>地址: {pond.Address}</p>
                  <p>簡介: {pond.txt}</p>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default FishNavigation;
