import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './list/Login';
import Register from './list/Register';
import Logout from './list/Logout';
import Navbar from './Navbar'; // 确保路径正确
import MapPage from './list/MapPage';
import Emission from './Emission/Emission';
import Dashboard from './Dash/Dashboard';
import Water from './Water/Water';
import Main from './list/Main';
import FishNavigation from './list/FishNavigation';
import SeafoodGuide from './education/SeafoodGuide';
import AIVideo from './education/AIVideo';
import Suggestion from './suggestion/Suggestion';
import Education from './education/Education';
import ReportDisplay from './list/ReportDisplay';
import ESG from './ESG/Esg';
import Btn from './list/Btn';
import AA from './list/ESGReport';
import FishGrowthProgress from './Emission/FishGrowthProgress';
import Emission2 from './Emission/Emission2';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
          
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/FishNavigation" element={<FishNavigation />} />
                <Route path="/education" element={<Education />} />
                <Route path="/AIVideo" element={<AIVideo />} />
                <Route path="/ReportDisplay" element={<ESG />} />
                <Route path="/AA" element={<FishGrowthProgress />} />
                {/* <Route path="/emission" element={<Emission/>} /> */}
                {/* <Route path="/option2" element={<Option2 />} />
                <Route path="/option3" element={<Option3 />} /> */}
                {Array.from({ length: 10 }, (_, i) => (
                    <Route key={i} path={`/topics/${i + 1}`} element={<Dashboard num={i + 1} />} />
                ))}
                {Array.from({ length: 10 }, (_, i) => (
                    <Route key={i} path={`/emission/${i + 1}`} element={<Emission2 num={i + 1} />} />
                ))}
                {Array.from({ length: 10 }, (_, i) => (
                    <Route key={i} path={`/water/${i + 1}`} element={<Water num={i + 1} />} />
                ))}
                {Array.from({ length: 10 }, (_, i) => (
                    <Route key={i} path={`/suggestion/${i + 1}`} element={<Suggestion num={i + 1} />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
