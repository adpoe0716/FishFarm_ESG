import React, { useEffect, useRef } from 'react';
import { Column } from '@antv/g2plot';

const CarbonEmissionColumnChartWithTime = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Column(chartRef.current, {
        data: [
          { date: '2023-01', category: '运输', value: 100 },
          { date: '2023-01', category: '电力', value: 150 },
          { date: '2023-01', category: '工业', value: 200 },
          { date: '2023-01', category: '农业', value: 50 },
          { date: '2023-01', category: '废弃物', value: 80 },
          { date: '2023-02', category: '运输', value: 110 },
          { date: '2023-02', category: '电力', value: 160 },
          { date: '2023-02', category: '工业', value: 210 },
          { date: '2023-02', category: '农业', value: 55 },
          { date: '2023-02', category: '废弃物', value: 85 },
          // 更多数据...
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

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>;
};

export default CarbonEmissionColumnChartWithTime;
