import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './DownloadExcel.css';
import downloadButtonImage from './src/assets/images/arrow.png';

const DownloadExcel = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchData = async () => {
    try {
      const apiUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=30.7726&longitude=79.4953&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,pressure_msl,surface_pressure,cloud_cover&timezone=auto`;

      const response = await axios.get(apiUrl);
      const weatherData = response.data;

      // Format data into CSV
      const csvContent = 'data:text/csv;charset=utf-8,';
      const headers = Object.keys(weatherData.hourly).filter(key => key !== 'time'); // Exclude "date and time" column
      const values = weatherData.hourly.time.map((time, index) =>
        Object.values(weatherData.hourly).map(data => data[index])
      );
      const csvRows = [headers.join(','), ...values.map(row => row.join(','))];
      const csvData = csvRows.join('\n');

      // Create blob and trigger download
      const blob = new Blob([csvContent + csvData], { type: 'text/csv' });
      saveAs(blob, `weather_data_${startDate}_to_${endDate}.csv`);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDownloadClick = () => {
    fetchData();
    setShowDropdown(false); // Close dropdown after selecting an option
  };

  return (
    <div>
      <button id="download-btn" onClick={handleDropdownClick}><img src={downloadButtonImage} alt={"download button"}/><b>Download Data</b></button>
      {showDropdown && (
        <div id="download-dropdown">
          <label htmlFor="start-date">Start Date:</label>
          <input className="helo" type="date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} />

          <label htmlFor="end-date" style={{ display: 'block' }}>End Date:</label>
          <input  className="helo" type="date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)}  />

          <button onClick={handleDownloadClick}>Download</button>
        </div>
      )}
    </div>
  );
};

export default DownloadExcel;
