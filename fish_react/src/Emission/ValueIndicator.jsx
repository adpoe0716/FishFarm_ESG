import React from 'react';
import { Progress } from 'antd';

const ValueIndicator = ({ value }) => {
  let strokeColor;

  // 根據數值決定顏色
  if (value <= 33) {
    strokeColor = '#52c41a'; // 綠色
  } else if (value > 33 && value <= 66) {
    strokeColor = '#faad14'; // 黃色
  } else {
    strokeColor = '#ff4d4f'; // 紅色
  }

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Progress
        percent={value}
        strokeColor={strokeColor}
        format={() => `${value}%`}
        strokeWidth={20} // 設置進度條粗細
        style={{ width: '80%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', width: '80%', margin: '0 auto' }}>
        <span>低</span>
        <span>中</span>
        <span>高</span>
      </div>
    </div>
  );
};

export default ValueIndicator;




