import React, { useState, useEffect } from 'react';
import WeatherTab from './WeatherTab';
import './WeatherCard.css';

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTabs, setShowTabs] = useState(true);
  const [buttonIcon, setButtonIcon] = useState('▼');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latitude = 30.7726; 
        const longitude = 79.4953; 

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m`;
        const response = await fetch(url);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTabs = () => {
    setShowTabs(!showTabs);
    setButtonIcon(showTabs ? '▶' : '▼');
  };

  return (
    <div className="weather-card">
      {isLoading && <p>Loading weather data...</p>}
      {error && <p>Error fetching weather data: {error.message}</p>}
      {weatherData && (
        <div>
          <button onClick={toggleTabs}>{buttonIcon}</button>
          <h3>Current Conditions</h3>
          {showTabs && (
            <div className="tabs-container">
              <WeatherTab title="Temperature (°C)" data={`${weatherData.current.temperature_2m}`} />
              <WeatherTab title="Humidity (%)" data={`${weatherData.current.relative_humidity_2m}`} />
              <WeatherTab title="Precipitation (mm)" data={`${weatherData.current.precipitation}`} />
              <WeatherTab title="Cloud-Cover (%)" data={`${weatherData.current.cloud_cover}`} />
              <WeatherTab title="Wind-Speed (Km/Hr)" data={`${weatherData.current.wind_speed_10m}`} />
              <WeatherTab title="Surface-Pressure (hPa)" data={`${weatherData.current.surface_pressure}`} />
              <WeatherTab title="Sealevel-Pressure (hPa)" data={`${weatherData.current.pressure_msl}`} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
