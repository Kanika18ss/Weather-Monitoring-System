import Nheader from '../components/Nheader.jsx';
import WeatherTable from '../Weather/WeatherTable/WeatherTable.jsx';
import WeatherCard from '../Weather/WeatherCard/WeatherCard.jsx';

import WeatherGraphs from '../Weather/WeatherGraphs/WeatherGraphs.jsx'
import '../Weather/weather.css'
import DownloadExcel from '../../DownloadExcel.jsx';
function DashApi() {
    const pageTitle = "Dashbord with API";
    return (
        <>
            <div className='weather'>
                <Nheader />
                <DownloadExcel/>
                <WeatherCard />
                <WeatherTable />
                <WeatherGraphs />
                
                
            </div>    
        </>
    )
}

export default DashApi;
