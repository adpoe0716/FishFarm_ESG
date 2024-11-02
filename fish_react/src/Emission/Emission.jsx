import React, { useState, useEffect } from "react";
import { Row, Col, Layout, Card } from "antd";
import Sidebar from "../Dash/Sidebar";
import Carbon from "./Carbon";
import ESGCard from "./ESGCard";
import ESGLine from "./ESGLine";
import CampaignProgress from "./CampaignProgress";
import { useAuth } from "../User";
import axios from "axios";
import LineAreaChart from './LineAreaChart';
import ProgressCircle from "./ProgressCircle"; 
import Efficiency from './Emission_gas';
const { Content } = Layout;

const Emission = ({ num }) => {
  const { user, user_id, logout, isAuthenticating } = useAuth();
  const currentUser_id = user ? user.user_id : "";
  const [fishPondData, setFishPondData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [v1, setv1] = useState("");
  const [v2, setv2] = useState("");
  const [v3, setv3] = useState("");
  const [v4, setv4] = useState("");

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
          console.log("2. Parsed Data:", parsedData);
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
      const feed = parseFloat(fishPondData[0].feed) || 0;
      const indirectMaterials =
        parseFloat(fishPondData[0].indirect_materials) || 0;
      const powerConsumption =
        parseFloat(fishPondData[0].power_consumption) || 0;
      const waste = parseFloat(fishPondData[0].waste) || 0;

      const all = feed + indirectMaterials + powerConsumption + waste;

      setv1(all);
      setv2(all - 1624);
      setv3(fishPondData[0].green_energy || 0);
      setv4(12);
    }
  }, [fishPondData]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar num={num} />
      <Layout
        style={{ flex: 1, minHeight: "100vh", backgroundColor: "#E1F5FE" }}
      >
        <Content style={{ margin: "24px", backgroundColor: "#E1F5FE" }}>
          <Row gutter={12}>
            <Col span={5}>
              <Card className="custom-card" style={{ height: "95%" }}>
                <ESGCard v1={v1} v2={v2} v3={v3} v4={v4} />
              </Card>
            </Col>
            <Col span={12}>
              <Card className="custom-card" style={{ height: "95%" }}>
                <h1 style={{ paddingBottom: "2px" }}>碳排總量占比</h1>
                {!loading && fishPondData.length > 0 ? (
                  <Carbon fishPondData={fishPondData} />
                ) : (
                  <p>Loading...</p>
                )}
                <h1 style={{ paddingBottom: "2px" }}>碳排量時間表</h1>
                {!loading && fishPondData.length > 0 ? (
                  <ESGLine fishPondData={fishPondData} />
                ) : (
                  <p>Loading...</p>
                )}
              </Card>
            </Col>
            <Col span={7}>
              <Card className="custom-card" style={{ height: "95%" }}>
                {!loading && fishPondData.length > 0 ? (
                  <>
                    <CampaignProgress fishPondData={fishPondData} />
                    <Efficiency/>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Emission;
