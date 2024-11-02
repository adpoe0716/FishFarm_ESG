import React, { useEffect, useRef } from 'react';
import { Column } from '@antv/g2plot';

const Emission = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Column(chartRef.current, {
        data: [
          { date: '2023-01', category: '照明', value: 100 },
          { date: '2023-01', category: '打氧機', value: 150 },
          { date: '2023-01', category: '抽水機', value: 200 },
          { date: '2023-01', category: '其他', value: 50 },
        ],
        isGroup: true,
        xField: 'date',
        yField: 'value',
        seriesField: 'category',
        label: {
          position: 'middle',
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
            { type: 'adjust-color' },
          ],
        },
        meta: {
          date: { alias: '日期' },
          value: { alias: '碳排放量 (吨)' },
          category: { alias: '类别' },
        },
      });

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '600px', height: '500px' }}></div>;
};

export default Emission;
