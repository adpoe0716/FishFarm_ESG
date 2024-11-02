import React from 'react';
import { Heatmap } from '@ant-design/plots';
import To2 from './To2';
const Algae = () => {
  const config = {
    mark: 'heatmap',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/heatmap.json',
    },
    xField: 'g',
    yField: 'l',
    colorField: 'tmp',
    sizeField: 26,
    style: {
      opacity: 0,
    },
  };

  return (
    <div className="heatmap-container">
      <Heatmap {...config} />
      <hr/>
      <To2/>
    </div>
  );
};

export default Algae;
