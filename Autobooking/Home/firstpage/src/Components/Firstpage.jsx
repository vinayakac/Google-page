import React from 'react';
import './Firstpage.css';
import SlickSlider from './Slider';

export default function Page(){
    return(
        <div className='main1'>
            <div>
                <SlickSlider/>
            </div>
            <div className='box'>
                
                <div className='box-1'>
                    <div className='box1-text'>User Login</div>
                
                </div>



                <div className='box-2'>
                    <div className='box2-text'>Driver Login</div>
                    </div>



                <div className='box-3'>
                    <div className='box3-text'>Autostand Login</div>
                    </div>
            </div>

        </div>
    );
}