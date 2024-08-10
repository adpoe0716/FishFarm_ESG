import React, { useEffect, useState } from 'react';
import { Card, Row, Col, List } from 'antd';
import { CloudOutlined, ThunderboltOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './WeatherComponent.css'; // Create and import your CSS file for styling

const WeatherComponent = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Fetch current weather data
    const fetchWeatherData = async () => {
      // You would replace this URL with the actual weather API endpoint
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YOUR_LOCATION');
      const data = await response.json();
      setCurrentWeather(data);
    };

    // Fetch weather forecast data
    const fetchForecastData = async () => {
      // You would replace this URL with the actual weather API endpoint
      const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=YOUR_LOCATION&days=5');
      const data = await response.json();
      setForecast(data.forecast.forecastday);
    };

    fetchWeatherData();
    fetchForecastData();
  }, []);

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Current Weather" style={{ marginBottom: '20px' }}>
        <Row>
          <Col span={12}>
            <h2>{currentWeather.location.name}</h2>
            <p>Temperature: {currentWeather.current.temp_c}°C</p>
            <p>Rain Probability: {currentWeather.current.precip_mm} mm</p>
            <p>Wind: {currentWeather.current.wind_kph} kph {currentWeather.current.wind_dir}</p>
          </Col>
          <Col span={12}>
            <CloudOutlined style={{ fontSize: '48px' }} />
          </Col>
        </Row>
      </Card>

      <Card title="Weather Forecast">
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={forecast}
          renderItem={item => (
            <List.Item>
              <Card>
                <h3>{item.date}</h3>
                <p>
                  <ArrowUpOutlined /> {item.day.maxtemp_c}°C
                  <ArrowDownOutlined style={{ marginLeft: '10px' }} /> {item.day.mintemp_c}°C
                </p>
                <p>
                  <ThunderboltOutlined /> {item.day.daily_chance_of_rain}% chance of rain
                </p>
                <p>
                  <CloudOutlined /> {item.day.condition.text}
                </p>
              </Card>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default WeatherComponent;
