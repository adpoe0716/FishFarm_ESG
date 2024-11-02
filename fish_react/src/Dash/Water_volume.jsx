import React, { useEffect } from 'react';
import { Liquid } from '@antv/g2plot';

const Water_volume = () => {
    useEffect(() => {
        const liquid = new Liquid('liquid-container', {
            percent: 0.7,
            outline: {
                border: 1,
                distance: 8,
            },
            wave: {
                length: 128,
            },
        });

        liquid.render();
    }, []);

    return <div id="liquid-container" style={{ width: 150 , height: 150 }}></div>;
};

export default Water_volume;
