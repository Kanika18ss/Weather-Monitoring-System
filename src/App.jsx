import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './views/HomePage.jsx';
import AboutPage from './views/awms.jsx';
import JiitPage from './views/jiit.jsx'; 
import JpulPage from './views/jpul.jsx';
import Footer from './components/Footer';
import Login from './views/Login.jsx';
import DashApi from './views/Dashboard1.jsx';
import DashIot from './views/Dashboard2.jsx';
import Nheader from './components/Nheader.jsx';
import Dashboard from './views/Dashboard.jsx';
function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Ndash" element={<Dashboard />} />
          <Route path="awms" element={<AboutPage />} />
          <Route path="jiit" element={<JiitPage />} />
          <Route path="jpvl" element={<JpulPage />} />
          <Route path="login" element={<Login/>} />
          <Route path="dash" element={<DashApi/>} />
          <Route path="dashIot" element={<DashIot />} />
          <Route path="Nheader" element={<Nheader/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
