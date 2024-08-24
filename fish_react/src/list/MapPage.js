import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import MapLayer1 from './Map.json';
import MapLayer2 from './Map2.json';
import MapLayer3 from './Map3.json';
import MapLayer4 from './Map4.json';
import MapLayer4 from './Map5.json';
import InfoPanel from './InfoPanel';
import './MapPage.css';

const layers = [
    { name: 'Layer 1', data: MapLayer1 },
    { name: 'Layer 2', data: MapLayer2 },
    { name: 'Layer 3', data: MapLayer3, type: 'polygon' },
    { name: 'Layer 4', data: MapLayer4, type: 'polygon' },
];

function MapPage() {
    const navigate = useNavigate();
    const [currentLayer, setCurrentLayer] = useState(MapLayer1);
    const [hovered, setHovered] = useState(false);
    const [layerType, setLayerType] = useState('markers');
    const [infoVisible, setInfoVisible] = useState(false);
    const [pieData, setPieData] = useState([]);

    const handleClick = (link) => {
        navigate(link);
    };

    const handleLayerChange = (layer) => {
        setCurrentLayer(layer.data);
        setLayerType(layer.type || 'markers');
    };

    const createIcon = (iconData) => {
        return new L.Icon({
            iconUrl: process.env.PUBLIC_URL + iconData.iconUrl,
            iconSize: iconData.iconSize,
            iconAnchor: iconData.iconAnchor,
            popupAnchor: iconData.popupAnchor,
            shadowSize: iconData.shadowSize
        });
    };

    return (
        <div className="map-container">
            <div className="layer-buttons">
                {layers.map((layer, index) => (
                    <button key={index} onClick={() => handleLayerChange(layer)}>
                        {layer.name}
                    </button>
                ))}
            </div>
            <InfoPanel data={pieData} visible={infoVisible} />
            <MapContainer center={[23.834148, 120.232551]} zoom={12} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {layerType === 'markers' && currentLayer.map((location) => (
                    <Marker
                        key={location.id}
                        position={location.position}
                        icon={createIcon(location.icon)}
                    >
                        <Popup>
                            <div>
                                <h2>{location.name}</h2>
                                <button onClick={() => handleClick(location.link)}>查看魚塭</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                {layerType === 'polygon' && (
                    <Polygon
                        positions={currentLayer.polygon}
                        pathOptions={{ color: hovered ? currentLayer.hoverColor : currentLayer.color }}
                        eventHandlers={{
                            mouseover: () => {
                                setHovered(true);
                                setInfoVisible(true);
                                setPieData([
                                    { type: '類型A', value: 27 },
                                    { type: '類型B', value: 25 },
                                    { type: '類型C', value: 18 },
                                    { type: '類型D', value: 15 },
                                    { type: '類型E', value: 10 },
                                    { type: '其他', value: 5 }
                                ]);
                            },
                            mouseout: () => {
                                setHovered(false);
                                setInfoVisible(false);
                            }
                        }}
                    />
                )}
            </MapContainer>
        </div>
    );
}

export default MapPage;
