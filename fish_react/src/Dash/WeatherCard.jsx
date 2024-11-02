import React from 'react';
import './WeatherCard.css';
import { CloudOutlined, ThunderboltOutlined, SendOutlined } from '@ant-design/icons'; // 引入可用的图标

const WeatherCard = () => {
  const weatherData = {
    currentTemp: '26°C',
    forecast: '晴轉多雲',
    rainfall: '15%',
    windDirection: '東北風 10 km/h',
  };

  return (
    <div className="weather-card">
      <div className="weather-info-item">
        <div className="weather-icon sunny-icon"><CloudOutlined /></div>
        <h3 className="weather-title">當前天氣</h3>
        <p className="weather-detail">{weatherData.currentTemp}</p>
      </div>
      <div className="weather-info-item">
        <div className="weather-icon cloudy-icon"><CloudOutlined /></div>
        <h3 className="weather-title">天氣預報</h3>
        <p className="weather-detail">{weatherData.forecast}</p>
      </div>
      <div className="weather-info-item">
        <div className="weather-icon rain-icon"><ThunderboltOutlined /></div>
        <h3 className="weather-title">降雨機率</h3>
        <p className="weather-detail">{weatherData.rainfall}</p>
      </div>
      <div className="weather-info-item">
        <div className="weather-icon wind-icon"><SendOutlined /></div>
        <h3 className="weather-title">風向風速</h3>
        <p className="weather-detail">{weatherData.windDirection}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
