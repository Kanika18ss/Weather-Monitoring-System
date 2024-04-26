import React from 'react';

//orange: #ff6f00 
//green: #37e12e
//yellow: #ffff48
//blue: #0080ff

const WeatherTab = ({ title, data }) => {

  let color = '';
  const value = parseFloat(data);
  if (title === 'Temperature (°C)') {
    if (value < 10) {
      color = '#0080ff';
    } else if (value >= 10 && value <= 25) {
      color = '#37e12e';
    } else {
      color = '#ff6f00';
    }
  } 
  else if (title === 'Sealevel-Pressure (hPa)') {
    if (value < 1000) {
      color = '#0080ff';
    } else if (value >= 1000 && value <= 1500) {
      color = '#37e12e';
    } else {
      color = '#ff6f00';
    }
  }
  else if (title === 'Humidity (%)') {
    if (value < 45) {
      color = '#ffff48';
    } else if (value >= 45 && value <= 75) {
      color = '#37e12e';
    } else {
      color = '#ff6f00';
    }
  }
  else if (title === 'Precipitation (mm)') {
    if (value < 2) {
      color = '#ffff48';
    } else if (value >= 2 && value <= 5) {
      color = '#00bed1';
    } else {
      color = '#0080ff';
    }
  }
  else if (title === 'Cloud-Cover (%)') {
    if (value < 40) {
      color = '#ff6f00';
    } else if (value >= 40 && value <= 80) {
      color = '#37e12e';
    } else {
      color = '#0080ff';
    }
  }
  else if (title === 'Wind-Speed (Km/Hr)') {
    if (value < 15) {
      color = '#ffff48';
    } else if (value >= 15 && value <= 25) {
      color = '#37e12e';
    } else {
      color = '#ff6f00';
    }
  }
  else if (title === 'Surface-Pressure (hPa)') {
    if (value < 600) {
      color = '#ff6f00';
    } else if (value >= 600 && value <= 800) {
      color = '#37e12e';
    } else {
      color = 'orange';
    }
  }


  return (
    <div className="weather-tab">
      <h5>{title.split(" ")[0]}</h5>
      <h5>{title.split(" ")[1]}</h5>
      <div className='parameterValue'>
        <p style={{ color }}>{data}</p>
      </div>
    </div>
  );
};

export default WeatherTab;
