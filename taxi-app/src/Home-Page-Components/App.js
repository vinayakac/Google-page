import './App.css';
// import logo from './logo.svg';
// import NavBar from './Components/Navigation';
// import DashboardComponents from './Components/Dashboard';
// import SideMenu from './Cide';
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './Components/Routes';
// import SideMenu from './Components/SideMenu1';
// import NotificationSection from './Components/Notification';

import ProfilePage from './Components/Profilesection';

import SettingPage from './Components/Settings';
// import Apps from './Components/Sample';

function App() {
  return (
    <div className="App">
      {/* <NotificationSection/> */}
      {/* <Router>
      <SideMenu/>
      <Routes />
      </Router> */}
      {/* <DashboardComponents/> */}

      {/* <Apps/> */}
      <ProfilePage/>
    
      <SettingPage/>

    </div>
  );
}

export default App;
