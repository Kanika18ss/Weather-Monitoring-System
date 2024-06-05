import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nheader from '../components/Nheader.jsx';
import Chart from 'chart.js/auto';
import '../css/iot.css';
import WeatherCard from './WeatherCardIOT.jsx';

function DashIot() {
    const [csvData, setCsvData] = useState([]);
    const [time, setTime] = useState(0);
    const [chartInstances, setChartInstances] = useState({});
    const [intervalTime, setIntervalTime] = useState(60000); // Default: minutely
    
    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeLRxrpQ7nimdUsqlSvpIOT-pxNmBseBBAUDg3GaOSgrkM9XAHa1_Z1_6Ygi2gsvrUw4iLAAPsG8Nm/pub?output=csv';

            try {
                const response = await axios.get(csvUrl);
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        
        fetchCSVData(); // Fetch data initially
        const interval = setInterval(() => {
            setTime(time + 1); // Update time every 5 seconds
            fetchCSVData(); // Fetch data every intervalTime
        }, intervalTime);
        
        return () => clearInterval(interval);
    }, [time, intervalTime]);

    useEffect(() => {
        Object.values(chartInstances).forEach(chart => chart.destroy());
        renderCharts(csvData); // Call renderCharts when csvData changes
    }, [csvData]); // Run this effect whenever csvData changes

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(',');
        const data = [];

        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject = {};

            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }

            data.push(rowObject);
        }

        return data;
    }

    const renderCSVData = () => {
        // Slice the csvData array to include only the first 10 rows
        const recentData = csvData.slice(0,10);
    
        return (
            <table className="csv-table">
                <thead>
                    <tr>
                        {recentData.length > 0 && Object.keys(recentData[0]).map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {recentData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, idx) => (
                                <td key={idx}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const renderCharts = (data) => {
        if (data.length === 0) {
            return;
        }
    
        const labels = Object.keys(data[0]).filter(label => label.toLowerCase() !== 'day' && label.toLowerCase() !== 'time');
        const colors = ['rgba(255, 99, 132,0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
    
        const newChartInstances = {};
    
        labels.forEach((label, index) => {
            const ctx = document.getElementById(`chart-${label}`).getContext('2d');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row[labels[0]]),
                    datasets: [{
                        label: label,
                        data: data.map(row => row[label]),
                        backgroundColor: colors[index % colors.length],
                        borderColor: colors[index % colors.length].replace('0.2', '1'),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
    
            newChartInstances[label] = newChart;
        });
    
        setChartInstances(newChartInstances);
    };

    const handleMinutelyClick = () => {
        setIntervalTime(60000); // Set interval to 1 minute
    };

    const handleHourlyClick = () => {
        setIntervalTime(3600000); // Set interval to 1 hour
    };

    return (
        <div className='iot'>
            <Nheader/>  
            <WeatherCard/> 
            <br />
            {/* <div className='modify-container'>
            <div className='modify'>
        <button onClick={handleMinutelyClick}>Minutely</button>
    </div>
    <div className='modify'>
        <button onClick={handleHourlyClick}>Hourly</button>
    </div>
</div> */}

            <br />
            <div className="chart-container">
                {csvData.length > 0 && Object.keys(csvData[0]).map((column, index) => {
                    // Exclude divs for date and time columns
                    if (column.toLowerCase() !== 'day' && column.toLowerCase() !== 'time') {
                        return (
                            <div key={index} className="chart">
                                <h2 className="chart-title">{column}</h2>
                                <canvas id={`chart-${column}`} width="400" height="400"></canvas>
                            </div>
                        );
                    } else {
                        return null; // Return null for date and time columns
                    }
                })}
            </div>
            <br />
            <div className="csv-container">
                {renderCSVData()}
            </div>
            <br />
        </div>
    );   
}

export default DashIot;
