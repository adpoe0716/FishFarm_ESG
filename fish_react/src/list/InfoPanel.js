import React, { useEffect } from 'react';
import { Pie as G2Pie } from '@antv/g2plot';
import { Card } from 'antd';
import './InfoPanel.css';

const InfoPanel = ({ data, visible }) => {
    useEffect(() => {
        let pie;
        if (visible) {
            if (pie) {
                pie.destroy();
            }
            pie = new G2Pie('pie-container', {
                data,
                angleField: 'value',
                colorField: 'type',
                radius: 0.8,
                label: {
                    type: 'spider',
                    labelHeight: 28,
                    content: '{name}\n{percentage}',
                },
            });
            pie.render();
        }
        return () => {
            if (pie) {
                pie.destroy();
            }
        };
    }, [visible, data]);

    return (
        <div className={`info-panel ${visible ? 'visible' : ''}`}>
            <Card title="詳細資訊" bordered={false}>
                <div id="pie-container" style={{ height: '200px' }}></div>
                <p>這裡是一些文字資料。</p>
            </Card>
        </div>
    );
};

export default InfoPanel;
