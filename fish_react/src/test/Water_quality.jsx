import React, { useEffect, useRef } from 'react';
import { Radar } from '@antv/g2plot';

const Water_quality = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Radar(chartRef.current, {
        data: [
          { item: '温度', value: 22, type: '当前值' },
          { item: 'pH值', value: 7, type: '当前值' },
          { item: '溶解氧', value: 8, type: '当前值' },
          { item: '氨氮', value: 10, type: '当前值' },
          { item: '亚硝酸盐', value: 10, type: '当前值' },
          { item: '温度', value: 25, type: '理想值' },
          { item: 'pH值', value: 7.5, type: '理想值' },
          { item: '溶解氧', value: 9, type: '理想值' },
          { item: '氨氮', value: 50, type: '理想值' },
          { item: '亚硝酸盐', value: 50, type: '理想值' },
        ],
        xField: 'item',
        yField: 'value',
        seriesField: 'type',
        meta: {
          value: {
            alias: '数值',
            min: 0,
            nice: true,
          },
        },
        xAxis: {
          line: null,
          tickLine: null,
        },
        yAxis: {
          line: null,
          tickLine: null,
        },
        point: {
          size: 2,
        },
        area: {},
      });

      chart.render();


      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default Water_quality;
