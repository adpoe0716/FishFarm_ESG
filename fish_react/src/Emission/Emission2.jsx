import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Card, Typography } from "antd";
import FishGrowthProgress from "./FishGrowthProgress";
import Carbon from "./Carbon";
import ESGLine from "./ESGLine";
import EmissionGas from "./Emission_gas";
import axios from "axios";
import { useAuth } from "../User";
import Sidebar from "../Dash/Sidebar";
import moment from "moment";
import ComparisonModal from "./ComparisonModal"; // 引入對比組件

const { Content } = Layout;
const { Paragraph } = Typography;

const Dashboard = ({ num }) => {
  const { user, user_id, logout, isAuthenticating } = useAuth();
  const currentUser_id = user ? user.user_id : "";
  const [fishPondData, setFishPondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cycle, setCycle] = useState(0);
  const [currentDateRange, setCurrentDateRange] = useState({
    startDate: "2024-04-01",
    endDate: "2025-02-30",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/fishfarm_data",
          { userid: currentUser_id, num: num }
        );
        if (response) {
          setFishPondData(response.data.filter((item) => item !== null));
        }
      } catch (error) {
        console.error("Error fetching fish farm data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser_id && !isAuthenticating) {
      fetchData();
    }
  }, [isAuthenticating, currentUser_id, cycle]);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#E1F5FE" }}>
      <Sidebar num={num} />
      <Content style={{ margin: "24px", backgroundColor: "#E1F5FE" }}>
        <Row gutter={12}>
          <Col span={20}>
            <Card className="custom-card" style={{ height: "100%" }}>
              <FishGrowthProgress />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="custom-card"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* 日期顯示 */}
              <div style={{ marginBottom: "10px", textAlign: "center" }}>
                <strong>生命週期預估:</strong>
                <br />
                <strong>
                  {currentDateRange.startDate} - {currentDateRange.endDate}
                </strong>
              </div>
              {/* 將對比按鈕放入 */}
              <ComparisonModal /> {/* 使用對比組件 */}
            </Card>
          </Col>
        </Row>

        <Row gutter={12} style={{ marginTop: "24px" }}>
          <Col span={8}>
            <Card className="custom-card" style={{ height: "100%" }}>
              <Paragraph strong style={{ fontSize: "32px" }}>
                碳排放占比
              </Paragraph>
              
              {!loading && fishPondData.length > 0 ? (
                <Carbon fishPondData={fishPondData} />
              ) : (
                <Paragraph>Loading...</Paragraph>
              )}
            </Card>
          </Col>

          <Col span={8}>
            <Card className="custom-card" style={{ height: "100%" }}>
              <Paragraph strong style={{ fontSize: "32px" }}>
                碳排放量時序圖
              </Paragraph>
              {!loading && fishPondData.length > 0 ? (
                <ESGLine />
              ) : (
                <Paragraph>Loading...</Paragraph>
              )}
            </Card>
          </Col>

          <Col span={8}>
            <Card className="custom-card" style={{ height: "100%" }}>
              <Paragraph strong style={{ fontSize: "32px" }}>
                電量細項分析
              </Paragraph>
              {!loading && fishPondData.length > 0 ? (
                <EmissionGas fishPondData={fishPondData} />
              ) : (
                <Paragraph>Loading...</Paragraph>
              )}
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
