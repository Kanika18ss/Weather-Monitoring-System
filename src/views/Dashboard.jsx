import React from 'react';
import Nheader from '../components/Nheader';

function Dashboard() {
    return (
        <React.Fragment>
            <Nheader />
            <div className="blogs__wraper bg-white-300 py-20 px-20">
    <div className="flex justify-between items-stretch">
        <div className="blogs bg-white mr-5 flex-1">
            <img src="https://www.infocaptor.com/img/beautiful_dashboard_blue_kpi.png" alt="" className="w-full h-auto" style={{ height: "300px" }} />
            <div className="p-5">
                <h1 className="text-2xl font-bold text-blue-900 py-2">Dashboard With API</h1>
                <p className="bg-white text-sm text-black text-justify">Displays data fetched from external sources via APIs, providing users with visual insights. It employs user-friendly interfaces and real-time updates, facilitating data interpretation. Through data visualization techniques like charts and graphs, users gain actionable insights efficiently. This integration enhances data interoperability and expands the scope of data-driven decision-making.</p>
                <a href="/dash" className="py-2 px-3 mt-4 px-6 text-white bg-blue-500 inline-block rounded">Show</a>
            </div>
        </div>
        <div className="blogs bg-white mr-5 flex-1">
            <img src="https://www.datapine.com/images/google-analytics-dashboards-datapine.png" alt="" className="w-full h-auto" style={{ height: "300px" }} />
            <div className="p-5">
                <h1 className="text-2xl font-bold text-blue-900 py-2">Dashboard With IOT</h1>
                <p className="bg-white text-sm text-black text-justify"><p><b>View real-time weather data</b>: This data is fetched from sensors and displayed on the dashboard, allowing users to see current weather conditions including temperature, humidity, dew point, pressure at sea level.</p>
                            <b>View historical data</b>: The system stores data in an Excel sheet, which can be viewed by users to see how weather conditions have changed over time.</p>
                <a href="/login" className="py-2 px-3 mt-4 px-6 text-white bg-blue-500 inline-block rounded">Show</a>
            </div>
        </div>
    </div>
</div>

        </React.Fragment>
    );
}

export default Dashboard;
