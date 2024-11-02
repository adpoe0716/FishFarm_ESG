import React, { useEffect, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

const WaterTemperature = (temp) => {
    // console.log(temp.temp);
    const temperature = temp.temp;
    const gaugeRef = useRef(null);

    useEffect(() => {
        if (gaugeRef.current) {
            const max = 100; 
            const percent = temperature / max; // 计算百分比

            const gauge = new Gauge(gaugeRef.current, {
                percent: percent,
                min: 0,
                max: max,
                range: {
                    ticks: [0, 0.25, 0.5, 0.75, 1], // 自定义刻度
                    color: ['#B1E8ED','#9ACDFA', '#FF7F50', '#E63946'], // 三段颜色
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
                        content: `${temperature}度`,
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
    }, [temperature]);

    return <div ref={gaugeRef} style={{ width: '250px', height: '250px' }}></div>;
};

export default WaterTemperature;
