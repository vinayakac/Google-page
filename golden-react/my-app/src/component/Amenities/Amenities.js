import React from 'react';
import './Amenities.css'
// import Slides from './Slides/Slides';

const Amenities = () => {
    return (
    <div className='Amenities'>
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
               

                <div className='boxes'>
                    <div className='box1'></div>
                    <div className='box2'>
                        {/* <Slides /> */}
                    </div>
                </div>
    </div>
    );
}



export default Amenities;