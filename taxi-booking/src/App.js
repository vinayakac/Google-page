// import logo from './logo.svg';
// import NavBar from './Components/Navigation';
// import DashboardComponents from './Components/Dashboard';
import './App.css';
import ProfilePage from './Components/Profilesection';
import SettingPage from './Components/Settings';
// import Apps from './Components/Sample';

function App() {
  return (
    <div className="App">
      {/* <DashboardComponents/> */}
      {/* <Apps/> */}
      <ProfilePage/>
      <SettingPage/>
    </div>
  );
}

export default App;
