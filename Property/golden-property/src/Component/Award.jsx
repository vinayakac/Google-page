import React from 'react';
import stick from '../Assests/stick.png';
// import Picture1 from '../Assests/Picture1.png';
// import Flower from '../Assests/flower.png';
import stickr from '../Assests/stickr.png';
import "./Award.css";
import Slider from '../Component/Slider'


const Award = () => {
  return (
    <div className="award">
      <div className="award-title">
        <div className="award-heading">Awards Received</div>
        <div className="award-subheading">We have received many awards</div>
      </div>
      <div className="award-image">
        <img src={stick} alt="Stick" className="stick-left" />
        <div className='slide'>
          <Slider></Slider>
        </div>
        <img src={stickr} alt="Stick Right" className="stick-right" />
      </div>
      
    </div>
  );
}

export default Award;
