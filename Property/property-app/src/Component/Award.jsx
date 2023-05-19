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
      <header className="award-title">
        <h1 className="award-heading">Awards Received</h1>
        <p className="award-subheading">We have received many awards</p>
      </header>
      <div className="award-image">
        <img src={stick} alt="Stick" className="stick-left" />
        {/* <div className="award-image2">
          <img src={Flower} alt="Flower" className="award-flower1" />
          <div className="award-image3">
            <img src={Picture1} alt="#" className="award-picture1" />
          </div>
        </div> */}
        <div className='slide'>
          <Slider></Slider>
        </div>
        <img src={stickr} alt="Stick Right" className="stick-right" />
      </div>
      
    </div>
  );
}

export default Award;
