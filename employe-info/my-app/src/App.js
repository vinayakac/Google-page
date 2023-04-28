import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from './components/Footer'
import "./App.css";


function App() {
  return (
    <div className="page-container">
      <div>
        <Header />
      </div>
      <div>
        <Body></Body>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
