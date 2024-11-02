import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Avatar, Divider, Skeleton, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../User";
import "./who.css";


const { Title, Text } = Typography;

const Who = ({ num }) => {
  const [WhoData, setWhoData] = useState([]);
  const { user, user_id, logout, isAuthenticating } = useAuth();
  const currentUser_id = user ? user.user_id : "";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhoData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/search/fishfarm",
          { num: num }
        );

        if (response) {
          const parsedData = response.data.filter((item) => item !== null);
          setWhoData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching fish farm data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser_id && !isAuthenticating) {
      fetchWhoData();
    }
  }, [isAuthenticating, currentUser_id, num]);

  const whoInfo = WhoData.length > 0 ? WhoData[0] : {};

  return (
    <Card className="who-container" style={{ width: "100%", borderRadius: 10 }}>
      {loading ? (
        <Skeleton active avatar paragraph={{ rows: 4 }} /> // 使用 Skeleton 顯示加載狀態
      ) : (
        <div>
          <div className="header-section">
            <Avatar
              size={80}
              src="/img/who.jpg" // 正確使用 src 屬性來設置圖片
              style={{ backgroundColor: "#1890ff" }} // 修正藍色代碼
            />
            <div className="manager-info">
              <Title level={4}>管理人: {whoInfo.Manager || "N/A"}</Title>
              <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                {" "}
                {/* 增大字體 */}
                魚種: {whoInfo.Species || "N/A"}
              </Text>
            </div>
          </div>

          <Divider className="custom-divider" />

          <div className="details-box">
            <Text>
              <strong>放苗日期:</strong>{" "}
              {whoInfo.StartDay ? whoInfo.StartDay.split("T")[0] : "N/A"}
            </Text>
            <Text>
              <strong>目前生命週期:</strong> 成長期
            </Text>
            <Text>
              <strong>週期預計至:</strong> 8/15 進入成魚期
            </Text>
            <Text>
              <strong>地址: {whoInfo.Address || "N/A"}</strong> 
            </Text>
            <Text>
              <strong>面積:</strong> {whoInfo.Area || "N/A"} 平方公尺
            </Text>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Who;
