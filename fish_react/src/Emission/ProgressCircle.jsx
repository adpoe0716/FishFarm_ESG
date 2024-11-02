import React from "react";
import { Gauge } from '@ant-design/plots';

const RingProgressChart = () => {
  // 確保 percent 不會是 undefined
  const percent = 0.75; // 預設 75% 效率

  if (typeof percent !== 'number' || percent < 0 || percent > 1) {
    console.error('Percent 值無效:', percent);
    return null; // 或者返回一個適當的默認圖表
  }

  const config = {
    percent,  // 設置當前百分比
    range: {
      ticks: [0, 1], // 設置範圍
      color: ['#0077b6'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#0077b6',
        },
      },
      pin: {
        style: {
          stroke: '#0077b6',
        },
      },
    },
    axis: {
      label: {
        formatter: () => '', // 隱藏軸標籤
      },
      subTickLine: {
        count: 0, // 隱藏子刻度線
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '16px',
          lineHeight: '20px',
        },
        formatter: ({ percent }) => `效率: ${(percent * 100).toFixed(0)}%`,
      },
    },
  };

  return <Gauge {...config} />;
};

export default RingProgressChart;
