import React from "react";
import { Area } from '@ant-design/plots';

const LineAreaChart = () => {
  const data = [
    { date: "2023-09-01", efficiency: 75, type: "當前效率" },
    { date: "2023-09-02", efficiency: 80, type: "當前效率" },
    { date: "2023-09-03", efficiency: 78, type: "當前效率" },
    { date: "2023-09-04", efficiency: 90, type: "當前效率" },
    { date: "2023-09-01", efficiency: 70, type: "之前效率" },
    { date: "2023-09-02", efficiency: 75, type: "之前效率" },
    { date: "2023-09-03", efficiency: 77, type: "之前效率" },
    { date: "2023-09-04", efficiency: 85, type: "之前效率" },
  ];

  const config = {
    data,
    xField: 'date',
    yField: 'efficiency',
    seriesField: 'type',
    smooth: true, // 讓線條更平滑
    areaStyle: () => {
      return { fillOpacity: 0.2 }; // 設置面積透明度
    },
    color: ['#0077b6', '#00bfae'], // 當前效率與之前效率的顏色
    xAxis: {
      title: {
        text: '日期',
      },
    },
    yAxis: {
      title: {
        text: '使用效率 (%)',
      },
    },
  };

  return <Area {...config} />;
};

export default LineAreaChart;
