// import logo from './logo.svg';
import './App.css';
import Icon1 from './component/section1/icon1.js'
import Example from './component/Slider/Slider';

// import Amenities from './component/Amenities/Amenities'
import Slides from './component/Amenities/Slides/Slides';
// import Body1 from './component/section1/body';



function App() {
  return (
    <div className='page-container'>
      <Icon1 /> 
      <Example />
      {/* <Slides /> */}
      {/* <Amenities /> */}
      <Slides />
      {/* <Body1 /> */}
      
      
    </div>
  );
}

export default App;
