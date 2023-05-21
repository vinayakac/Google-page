import './App.css';

import React from "react";
import Page from './components/Page.jsx'
import ServiceSlider from './components/ServiceSlider.js'
import SlickSlider from './components/SlickSlider.js';


import Dropdown from './components/Dropdown';
import { useState } from 'react';


function App() {
 const [selected, setSelected]=useState("Completed Projects");
  return (
  
    <>
    <div>
      <Page></Page>
    </div>
    <div>
      <Dropdown selected={selected} setSelected={setSelected}>
        </Dropdown>
        </div>
        
    <div>
      <ServiceSlider></ServiceSlider>
    </div>

    <div>
      <SlickSlider></SlickSlider>
    </div>


   

 </>

 
   
  );
}

export default App;
