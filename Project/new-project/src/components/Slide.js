import React from 'react'
import Slit from './Slit';

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
   
<div>
  <Slit></Slit>
</div>
    <Slider {...settings}>
    <div>
    <CustomSlider />
    </div>
    <div>
    <CustomSlider />
    </div>
    <div>
    <CustomSlider />
    </div>
    <div>
    <CustomSlider />
    </div>
   
   
  </Slider>

  
 
 </>
  );
}

