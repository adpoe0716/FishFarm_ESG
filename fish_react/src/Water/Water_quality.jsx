import React, { useEffect, useRef } from "react";
import { Radar } from "@antv/g2plot";
import To from "./To";
const Water_quality = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Radar(chartRef.current, {
        data: [
          { item: "溫度", value: 22, type: "當前值" },
          { item: "pH值", value: 7, type: "當前值" },
          { item: "含氧量", value: 8, type: "當前值" },
          { item: "鹽度", value: 42, type: "當前值" },
          { item: "亚硝酸盐", value: 35, type: "當前值" },
          { item: "溫度", value: 25, type: "理想值" },
          { item: "pH值", value: 7.5, type: "理想值" },
          { item: "含氧量", value: 9, type: "理想值" },
          { item: "鹽度", value: 50, type: "理想值" },
          { item: "亚硝酸盐", value: 50, type: "理想值" },
        ],
        xField: "item",
        yField: "value",
        seriesField: "type",
        meta: {
          value: {
            alias: "数值",
            min: 0,
            nice: true,
          },
        },
        xAxis: {
          line: null,
          tickLine: null,
          label: {
            style: {
              fontSize: 14,
              fontWeight: "bold",
              fill: "#333",
            },
          },
        },
        yAxis: {
          line: null,
          tickLine: null,
          label: {
            style: {
              fontSize: 12,
              fill: "#333",
            },
          },
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

  return (
    <div>
      <div className="water-quality-card">
        <div ref={chartRef} style={{ width: "390px", height: "400px" }}></div>
      </div>
      <br />
      <hr />
      <To />
    </div>
  );
};

export default Water_quality;
