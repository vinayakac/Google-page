
import './App.css';
import HomePage from './Home-Page-Components/MainHomePage';
import GoogleApiWrapper from './Home-Page-Components/Googlemap';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <GoogleApiWrapper/>
      
    </div>
  );
}

export default App;
