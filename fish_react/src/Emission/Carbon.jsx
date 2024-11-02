import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = ({ fishPondData }) => {
  // 只提取資料的第 0 列
  const firstRow = fishPondData[0] || {};

  // 檢查 firstRow 中是否有數值，如果沒有則給予默認值
  const data = [
    { type: "飼料", value: parseFloat(firstRow.feed) || 0 },
    { type: "間接材料", value: parseFloat(firstRow.indirect_materials) || 0 },
    { type: "電力", value: parseFloat(firstRow.power_consumption) || 0 },
    { type: "運輸", value: parseFloat(firstRow.transportation) || 0 },
    { type: "廢棄物", value: parseFloat(firstRow.waste) || 0 },
  ];

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 1, // 確保餅圖的半徑為最大，讓它填滿
    innerRadius: 0, // 設定為 0 以獲取完整圓餅
    label: {
      text: 'type',
      content: '{name}: {value}', // 顯示名稱和數值
    },
    legend: {
      position: "top",
    },
    pieStyle: {
      stroke: "#fff",
      lineWidth: 1,
    },
    appendPadding: 10, // 確保圖表不被裁剪
    width: 550, // 圖表的寬度
    height: 550, // 圖表的高度，確保與寬度一致，保持比例
  };

  return <Pie {...config} />;
};

export default DemoPie;
