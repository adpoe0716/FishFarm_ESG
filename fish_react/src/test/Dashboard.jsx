import React from "react";
import { Row, Col, Layout } from "antd";
import Who from "../Topics/Who";
import Video from "./Video";
import WaterVolume from "./Water_volume";
import Emission from "./Emission";
import ElectricPointer from "./Electric_pointer";
import WaterTemperaturePointer from "./Water_temperature";
import WaterConsumptionPointer from "./Water_consumption";
import WaterQuality from "./Water_quality";
import ReleaseFry from "./Release_fry";
import Sidebar from "./Sidebar"; // 引入 Sidebar 组件
import "./Dashboard.css";

const { Content } = Layout;

const Dashboard = ({ num }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: "24px", backgroundColor: "#f0f2f5" }}>
          <div className="dashboard-container">
            <div className="dashboard-container2">
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <h1>魚塭資訊</h1>
                  <div className="who-wrapper">
                    <Who num={num} />
                  </div>
                </Col>
                <Col span={8}>
                  <h1>監視畫面</h1>
                  <div className="video-wrapper">
                    <Video />
                  </div>
                </Col>
                <Col span={8}>
                  <h1>水溫資訊</h1>
                  <div className="water-temperature-wrapper">
                    <WaterTemperaturePointer />
                  </div>
                </Col>
              </Row>

              <Row gutter={[16, 16]} className="metrics-row">
                <Col span={8}>
                <h1>用水量</h1>
                  <div className="water-consumption-wrapper">
                    <WaterConsumptionPointer />
                  </div>
                </Col>

                <Col span={8}>
                <h1>目前水量</h1>
                  <div className="water-volume-wrapper">
                    <WaterVolume />
                  </div>
                </Col>
                <Col span={8}>
                <h1>用電量</h1>
                  <div className="ElectricPointer-wrapper">
                    <ElectricPointer />
                  </div>
                </Col>
              </Row>

              <Row gutter={[16, 16]} className="metrics-row">
                <Col span={24}>
                <h1>魚苗資訊</h1>
                  <div className="release-fry-wrapper">
                    <ReleaseFry />
                  </div>
                </Col>
              </Row>

              <Row gutter={[16, 16]} className="metrics-row">
                <Col span={12}>
                <h1>排放資訊</h1>
                  <div className="emission-wrapper">
                    <Emission />
                  </div>
                </Col>
                <Col span={12}>
                <h1>水質資訊</h1>
                  <div className="water-quality-wrapper">
                    <WaterQuality />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
