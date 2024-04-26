import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './DownloadExcel.css';
import downloadButtonImage from './src/assets/images/arrow.png';

const DownloadExcel = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchDataAndDownload = async () => {
    try {
      const currentDate = new Date(); 
      const sixMonthsAgoDate = new Date();
      sixMonthsAgoDate.setMonth(sixMonthsAgoDate.getMonth() - 6); // to calculate 6 months back

      const startDate = sixMonthsAgoDate.toISOString().split('T')[0]; // Format start date
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1).toISOString().split('T')[0]; // Format end date excluding today

      const apiUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=30.7726&longitude=79.4953&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,pressure_msl,surface_pressure,cloud_cover&timezone=auto`;

      const response = await axios.get(apiUrl);
      setWeatherData(response.data);

      // Format data into CSV
      const csvContent = 'data:text/csv;charset=utf-8,';
      const headers = Object.keys(response.data.hourly).filter(key => key !== 'time'); 
      const values = response.data.hourly.time.map((time, index) =>
        Object.values(response.data.hourly).map(data => data[index])
      );
      const csvRows = [headers.join(','), ...values.map(row => row.join(','))];
      const csvData = csvRows.join('\n');

      // Create blob and trigger download
      const blob = new Blob([csvContent + csvData], { type: 'text/csv' });
      saveAs(blob, 'weather_data.csv');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <button id="download-btn" onClick={fetchDataAndDownload}><img src={downloadButtonImage}/><b>Download Data</b></button>
    </div>
  );
};

export default DownloadExcel;
