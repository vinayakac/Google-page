
import './App.css';

// import Navbar from './components/Components/sami components/navbar/navbar';
import Footer from './components/Footer/Footer';
// import Builders from './components/Builders';
// import React, { useState, useEffect } from 'react';

function App() {

  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)');
  //   setIsSmallScreen(mediaQuery.matches);

  //   const handler = (event) => {
  //     setIsSmallScreen(event.matches);
  //   };

  //   mediaQuery.addEventListener('change', handler);

  //   return () => {
  //     mediaQuery.removeEventListener('change', handler);
  //   };
  // }, []);

  return (
     <div className="App" >
    {/* <Navbar/> */}
      {/* <Builders/> */}
      <Footer/>
      
    </div>
  );//<div className={`App ${isSmallScreen ? 'small-screen' : ''}`}>
}

export default App;
