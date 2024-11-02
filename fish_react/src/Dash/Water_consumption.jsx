import React, { useEffect, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

const WaterConsumption = () => {
    // 使用 useRef 创建 gaugeRef
    const gaugeRef = useRef(null);

    useEffect(() => {
        if (gaugeRef.current) {
            const consumption = 600; // 设定当前温度数值
            const max = 1000; // 最大值
            const percent = consumption / max; // 计算百分比

            const gauge = new Gauge(gaugeRef.current, {
                percent: percent,
                min: 0,
                max: max,
                range: {
                    ticks: [0, 0.25, 0.5, 0.75, 1], // 自定义刻度
                    color: ['#A0E7E5','#70D6FF', '#1E88E5', '#1A237E'], // 三段颜色
                },
                axis: {
                    label: {
                        formatter: (v) => {
                            return (v * max).toFixed(0); // 根据百分比转化为实际数值显示
                        },
                    },
                },
                indicator: {
                    pointer: {
                        style: {
                            stroke: '#D0D0D0',
                        },
                    },
                    pin: {
                        style: {
                            stroke: '#D0D0D0',
                        },
                    },
                },
                statistic: {
                    content: {
                        content: `${consumption}度`,
                        style: {
                            fontSize: '36px',
                            lineHeight: '36px',
                        },
                    },
                },
            });

            gauge.render();

            return () => gauge.destroy(); // 清理
        }
    }, []);

    return <div ref={gaugeRef} style={{ width: '250px', height: '250px' }}></div>;
};

export default WaterConsumption;
