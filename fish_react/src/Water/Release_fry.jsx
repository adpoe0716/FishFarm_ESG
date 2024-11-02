import React, { useEffect, useRef } from "react";
import { Area } from "@antv/g2plot";
import To from './To';
const Release_fry = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Area(chartRef.current, {
        data: [
          { date: "2023-08-01", type: "魚苗數量", value: 500 },
          { date: "2023-08-02", type: "魚苗數量", value: 520 },
          { date: "2023-08-03", type: "魚苗數量", value: 540 },
          { date: "2023-08-04", type: "魚苗數量", value: 530 },
          { date: "2023-08-05", type: "魚苗數量", value: 550 },
          { date: "2023-08-06", type: "魚苗數量", value: 560 },
          { date: "2023-08-07", type: "魚苗數量", value: 570 },

          { date: "2023-08-01", type: "生長指標", value: 70 },
          { date: "2023-08-02", type: "生長指標", value: 75 },
          { date: "2023-08-03", type: "生長指標", value: 78 },
          { date: "2023-08-04", type: "生長指標", value: 80 },
          { date: "2023-08-05", type: "生長指標", value: 82 },
          { date: "2023-08-06", type: "生長指標", value: 85 },
          { date: "2023-08-07", type: "生長指標", value: 88 },

          { date: "2023-08-01", type: "用水量", value: 300 },
          { date: "2023-08-02", type: "用水量", value: 320 },
          { date: "2023-08-03", type: "用水量", value: 310 },
          { date: "2023-08-04", type: "用水量", value: 330 },
          { date: "2023-08-05", type: "用水量", value: 340 },
          { date: "2023-08-06", type: "用水量", value: 350 },
          { date: "2023-08-07", type: "用水量", value: 360 },

          { date: "2023-08-01", type: "用電量", value: 150 },
          { date: "2023-08-02", type: "用電量", value: 155 },
          { date: "2023-08-03", type: "用電量", value: 160 },
          { date: "2023-08-04", type: "用電量", value: 165 },
          { date: "2023-08-05", type: "用電量", value: 170 },
          { date: "2023-08-06", type: "用電量", value: 175 },
          { date: "2023-08-07", type: "用電量", value: 180 },

          { date: "2023-08-01", type: "排放量", value: 50 },
          { date: "2023-08-02", type: "排放量", value: 52 },
          { date: "2023-08-03", type: "排放量", value: 53 },
          { date: "2023-08-04", type: "排放量", value: 54 },
          { date: "2023-08-05", type: "排放量", value: 56 },
          { date: "2023-08-06", type: "排放量", value: 57 },
          { date: "2023-08-07", type: "排放量", value: 58 },
        ],
        xField: "date",
        yField: "value",
        seriesField: "type",
        areaStyle: { fillOpacity: 0.7 },
        xAxis: {
          type: "timeCat",
          title: {
            text: "日期",
          },
        },
        yAxis: {
          title: {
            text: "數值",
          },
        },
        meta: {
          date: { alias: "日期" },
          value: { alias: "數值" },
        },
        smooth: true,
        animation: {
          appear: {
            animation: "path-in",
            duration: 3000,
          },
        },
      });

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div className="Release-fry-card">
        <div ref={chartRef} style={{ width: "540px", height: "400px" }}></div>
      </div>
      <br />
      <hr />
      <To />
    </div>
  );
};

export default Release_fry;
