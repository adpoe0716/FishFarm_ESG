import React from 'react';
import { Line } from '@ant-design/plots';

const ESGLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: '/data.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };
  return <Line {...config} />;
};

export default ESGLine;
