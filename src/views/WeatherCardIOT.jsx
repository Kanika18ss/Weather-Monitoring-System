import React, { useState, useEffect } from 'react';
import './WeatherCard.css';
import  WeatherTab from './wt'; 


const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState({ humidity: null, dewPoint: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSeLRxrpQ7nimdUsqlSvpIOT-pxNmBseBBAUDg3GaOSgrkM9XAHa1_Z1_6Ygi2gsvrUw4iLAAPsG8Nm/pub?output=csv');
        const data = await response.text();
        const rows = data.split('\n');

        // Find the last non-null humidity data
        let humidity = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const humiditydata = columns[3].trim(); 
            if (humiditydata !== '') {
            humidity = humiditydata;
            break;
            }
        }

        // Find the last non-null dew point data
        let dewPoint = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const dewPointdata = columns[4].trim(); 
            if (dewPointdata !== '') {
            dewPoint = dewPointdata;
            break;
            }
        }
        let temperature = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const temperaturedata = columns[6].trim(); 
            if (temperaturedata !== '') {
            temperature = temperaturedata;
            break;
            }
        }
        let aqi = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const aqidata = columns[5].trim(); 
            if (aqidata !== '') {
            aqi = aqidata;
            break;
            }
        }
        let pressure = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const pressuredata = columns[7].trim(); 
            if (pressuredata !== '') {
            pressure = pressuredata;
            break;
            }
        }
        let altitude = null;
        for (let i = rows.length - 2; i >= 0; i--) {
            const columns = rows[i].split(',');
            const altitudedata = columns[8].trim(); 
            if (altitudedata !== '') {
            altitude = altitudedata;
            break;
            }
        }

        const lastRow = rows[rows.length - 2]; // -2 to ignore the header row
        const columns = lastRow.split(',');
        //const temperature = columns[6];
        //const pressure = columns[7];
        //const altitude = columns[8];
        //const aqi= columns[5];
        setWeatherData({ temperature, pressure, altitude, aqi, humidity, dewPoint});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className="weather-card">
      <h2 style={{color:'white'}}>Current Weather</h2>
      <div className='tabs-container'>
        <WeatherTab title="Temperature (°C)" data={weatherData.temperature} />
        <WeatherTab title="Humidity (%)" data={weatherData.humidity} />
        <WeatherTab title="Dew-Point (°C)" data={weatherData.dewPoint} />
        <WeatherTab title="Air-Quality-Index (ppm)" data={weatherData.aqi} />
        <WeatherTab title="Surface-Pressure (hPa)" data={weatherData.pressure} />
        <WeatherTab title="Altitude (m)" data={weatherData.altitude} />
      </div>
    </div>
  );
};

export default WeatherCard;
