import React, { useEffect, useRef } from 'react';
import { Area } from '@antv/g2plot';

const Release_fry = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Area(chartRef.current, {
        data: [
          { date: '2023-01', type: '鱼贝水产', value: 100 },
          { date: '2023-02', type: '鱼贝水产', value: 150 },
          { date: '2023-03', type: '鱼贝水产', value: 200 },
          { date: '2023-04', type: '鱼贝水产', value: 250 },
          { date: '2023-05', type: '鱼贝水产', value: 300 },
          { date: '2023-01', type: '鱼贝', value: 10 },
          { date: '2023-02', type: '鱼贝', value: 15 },
          { date: '2023-03', type: '鱼贝', value: 20 },
          { date: '2023-04', type: '鱼贝', value: 25 },
          { date: '2023-05', type: '鱼贝', value: 30 },
        ],
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
        areaStyle: { fillOpacity: 0.7 },
        xAxis: {
          type: 'timeCat',
          title: {
            text: '时间',
          },
        },
        yAxis: {
          title: {
            text: '生长量',
          },
        },
        meta: {
          date: { alias: '日期' },
          value: { alias: '生长量 (单位)' },
        },
        smooth: true,
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000,
          },
        },
      });

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default Release_fry;

