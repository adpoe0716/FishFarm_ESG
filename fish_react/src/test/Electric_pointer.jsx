import React, { useEffect, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

const ElectricPointer = () => {

    const gaugeRef = useRef(null);

    useEffect(() => {
        if (gaugeRef.current) {
            const power = 150; 
            const max = 1000; // 最大值
            const percent = power / max; // 计算百分比

            const gauge = new Gauge(gaugeRef.current, {
                percent: percent,
                min: 0,
                max: max,
                range: {
                    ticks: [0, 0.25, 0.5, 0.75, 1], // 自定义刻度
                    color: ['#D1E9F6','#FFD700', '#FF7F50', '#800000'],
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
                        content: `${power}度`,
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

export default ElectricPointer;
