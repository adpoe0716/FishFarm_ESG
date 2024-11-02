import React, { useState } from "react";
import { Button, Modal, Typography, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Column, Line } from "@ant-design/plots"; // 使用 AntD Plots 圖表

const { Paragraph } = Typography;

const ComparisonModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // 控制Modal彈出狀態

  // 打開懸浮視窗
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 關閉懸浮視窗
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 模擬生命週期數據對比
  const cycleComparisonData = [
    {
      type: "碳排放量",
      cycle: "生命週期1",
      value: 320,
    },
    {
      type: "碳排放量",
      cycle: "生命週期2",
      value: 280,
    },
    {
      type: "用電量",
      cycle: "生命週期1",
      value: 521.5,
    },
    {
      type: "用電量",
      cycle: "生命週期2",
      value: 490.3,
    },
    {
      type: "抽水量",
      cycle: "生命週期1",
      value: 1043,
    },
    {
      type: "抽水量",
      cycle: "生命週期2",
      value: 950,
    },
  ];

  // 增加更多的環境數據，比如氮濃度、氧濃度等
  const environmentalData = [
    { date: "2024-01-01", variable: "氣溫", value: 25 },
    { date: "2024-01-01", variable: "水溫", value: 20 },
    { date: "2024-01-01", variable: "水質", value: 7.5 },
    { date: "2024-01-01", variable: "氮濃度", value: 1.2 },
    { date: "2024-01-01", variable: "氧濃度", value: 5.8 },

    { date: "2024-02-01", variable: "氣溫", value: 28 },
    { date: "2024-02-01", variable: "水溫", value: 23 },
    { date: "2024-02-01", variable: "水質", value: 7.8 },
    { date: "2024-02-01", variable: "氮濃度", value: 1.4 },
    { date: "2024-02-01", variable: "氧濃度", value: 6.0 },

    { date: "2024-03-01", variable: "氣溫", value: 30 },
    { date: "2024-03-01", variable: "水溫", value: 25 },
    { date: "2024-03-01", variable: "水質", value: 7.4 },
    { date: "2024-03-01", variable: "氮濃度", value: 1.3 },
    { date: "2024-03-01", variable: "氧濃度", value: 5.6 },

    { date: "2024-04-01", variable: "氣溫", value: 32 },
    { date: "2024-04-01", variable: "水溫", value: 28 },
    { date: "2024-04-01", variable: "水質", value: 7.6 },
    { date: "2024-04-01", variable: "氮濃度", value: 1.1 },
    { date: "2024-04-01", variable: "氧濃度", value: 5.7 },
  ];

  // 縱向柱狀圖配置
  const columnConfig = {
    data: cycleComparisonData,
    isGroup: true, // 群組條形圖
    xField: "type",
    yField: "value",
    seriesField: "cycle",
    label: {
      position: "top", // 修改為 `top`，防止錯誤
      layout: [{ type: "interval-adjust-position" }, { type: "interval-hide-overlap" }],
    },
    autoFit: true, // 確保圖表自適應
  };

  // 折線圖配置，為不同變量設置不同顏色
  const lineConfig = {
    data: environmentalData,
    xField: "date",
    yField: "value",
    seriesField: "variable",
    smooth: true, // 平滑曲線
    lineStyle: {
      lineWidth: 2,
    },
    colorField: "variable", // 將不同的變量設置不同顏色
    color: ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF"], // 自定義顏色
    autoFit: true, // 確保圖表自適應
  };

  return (
    <>
      {/* 對比按鈕 */}
      <Button type="primary" onClick={showModal}>
        週期對比分析
      </Button>

      {/* Modal 懸浮視窗 */}
      <Modal
        title="生命週期對比分析"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200} // 設置更大的寬度，為橫向佈局提供空間
      >
        <Row gutter={24}>
          {/* 柱狀圖展示 */}
          <Col span={12}>
            <h3>碳排放量、用電量、抽水量對比</h3>
            <Column {...columnConfig} />
          </Col>
          {/* 折線圖展示 */}
          <Col span={12}>
            <h3>氣溫、水溫、水質、氮濃度、氧濃度對應分析</h3>
            <Line {...lineConfig} />
          </Col>
        </Row>
        {/* 分析結果 */}
        <div style={{ marginTop: "20px" }}>
          <h3>分析結果</h3>
          <Paragraph>
            在對比中可以看出，生命週期1的碳排放量為320單位，略高於生命週期2的280單位。
            而用電量方面，生命週期1也高於生命週期2，主要由於該週期中的抽水量更大，達到1043升，與生命週期2的950升形成對比。
            環境變量方面，氣溫和水溫的上升對於水質的穩定性有一定影響，氮濃度與氧濃度的變化顯示了水環境的健康狀況，建議進行水質監測以保持穩定的水環境。
          </Paragraph>
        </div>
      </Modal>
    </>
  );
};

export default ComparisonModal;
