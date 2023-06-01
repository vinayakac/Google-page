import './App.css';

// import NavBar from './Navigation';
// import DashboardComponents from './Dashboard';
// import SideMenu from './Cide';
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routes from './Routes';
// import SideMenu from './SideMenu1';
// import NotificationSection from './Notification';

import ProfilePage from './Profilesection';

// import SettingPage from './Settings';
// import Apps from './Sample';

function HomePage() {
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
    
      {/* <SettingPage/> */}

    </div>
  );
}

export default HomePage;
