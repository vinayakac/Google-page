import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'


const SlickSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
   
    
    dots: false,
  };

  return (
    <div className='main'>
    <Slider {...settings}>
      <div>
      <img className='icon-1' src={require('./Images/Auto.png')} alt=""></img>
        
      </div>
      <div>
      <img className='icon-2' src={require('./Images/Auto.png')} alt=""></img>
      </div>
      <div>
      <img className='icon-3' src={require('./Images/Auto.png')} alt=""></img>
      </div>
      
    </Slider>
   
    </div>
    
  );
};

export default SlickSlider;
