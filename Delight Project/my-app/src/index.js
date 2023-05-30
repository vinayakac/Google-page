import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/HeaderComponent/Header';
import Banner from './Components/BannerComponent/Banner';
import Service from './Components/ServiceComponent/Service';
import Ongoing from './Components/OngoingComponent/Ongoing';
import Location from './Components/LocationComponent/Location';
import Features from './Components/FeaturesComponent/Features';
import Trending from './Components/TrendingComponent/Trending';
import Featured from './Components/FeaturedComponents/Feature';
import Testinomial from './Components/TestinomialsComponent/Testinomial';
import Ourclient from './Components/OurclientsComponent/Ourclient';
import Contact from './Components/ContactusComponent/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
    <Service />
    <Ongoing />
    <Location />
    <Features />
    <Trending />
    <Featured />
    <Testinomial />
    <Ourclient />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
