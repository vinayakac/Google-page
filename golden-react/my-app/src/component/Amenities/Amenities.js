import React from 'react';
import './Amenities.css'
// import Slides from './Slides/Slide.js';

const Amenities = () => {
    return (
    <div className='Amenities'>
        <div class="img-container">
            <div class="box1">
                <img className="icm-1" src={require('./images/am-img1.png')} alt=""/>
            </div>
            <div className='heading'>
            <div className='abc1'>
                <div className='text1'>
                    <text>Amenities</text>
                </div>
            </div>
            <div className='abc2'>
                <div className='text2'>
                    <text>Go from browsing to buying</text>
                </div>
            </div>
            
        </div>
        <div className='sec'></div>
        </div>
        
    </div>
    );
}



export default Amenities;