import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons"; // 使用 AntD 的錯誤圖標
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Weather from "./WeatherCard";
import CardWV from "./Card";
import Video from "./Video";
import Who from "./Who";
import Todo from "./Todo";
import Temp from "./Water_temperature";
import { useAuth } from "../User";
import axios from "axios";
import TT from "./TT";

const { Content } = Layout;

const Dashboard = ({ num }) => {
  const { user, user_id, logout, isAuthenticating } = useAuth();
  const currentUser_id = user ? user.user_id : "999";
  const [fishPondData, setFishPondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [temp, settemp] = useState("");
  const [pow, setpow] = useState("");
  const [wat, setwat] = useState("");

  useEffect(() => {
    const fishfarmData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/fishfarm_data",
          { userid: currentUser_id, num: num }
        );

        if (response) {
          const parsedData = response.data.filter((item) => item !== null);
          setFishPondData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching fish farm data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser_id && !isAuthenticating) {
      fishfarmData();
    }
  }, [isAuthenticating, currentUser_id]);

  useEffect(() => {
    if (fishPondData.length > 0 && fishPondData[0].temperature) {
      settemp(fishPondData[0].temperature);
      setpow(fishPondData[0].power_consumption);
      setwat(fishPondData[0].water_pumping);
    }
  }, [fishPondData]);

  let temperature = 39;
  if (num == 4) {
    temperature = 41;
  } else {
    temperature = 39;
  }
  const { Paragraph } = Typography;
  const warningThreshold = 40;
  const showWarning = temperature > warningThreshold;

  return (
    <Layout style={{ height: "95vh" }}>
      <Sidebar num={num} />
      <Layout>
        <Content
          style={{ padding: "24px", flex: 1, backgroundColor: "#E1F5FE" }}
        >
          <Row gutter={24} className="top-row">
            <Col className="Weather" span={12}>
              <div className="card-weather">
                <Paragraph className="card-title">天氣狀況</Paragraph>
                <Weather />
              </div>
            </Col>
            <Col className="WV" span={6}>
              <div className="card-wv">
                <CardWV pow={pow} wat={wat} />
              </div>
            </Col>
            <Col className="Temp" span={6}>
              <div className="card-temp">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Paragraph className="card-title">溫度狀況</Paragraph>
                  {showWarning && (
                    <ExclamationCircleOutlined className="temp-warning-icon" />
                  )}
                </div>
                <Temp temp={temp} />
              </div>
            </Col>
          </Row>

          <Row gutter={24} className="bottom-row">
            <Col className="Video" span={12}>
              <div className="card-video">
                <Video num={num} />
              </div>
            </Col>
            <Col className="WhoTodo" span={6}>
              <Paragraph className="card-title warning-title">警示資訊</Paragraph>
              <div className="card-todo"><TT /> <Todo /></div>
            </Col>
            <Col className="WhoTodo" span={6}>
              <div className="card-who-wrapper">
                <div className="card-who">
                  <Paragraph className="card-title">管理者資訊</Paragraph>
                  <Who num={num} />
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
