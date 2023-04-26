import React from 'react';
import './About.css'

export default function About(){
    return(
        <div className='about'>
        <div className='About-container'>About Us</div>
        <div className='part1'>
            <div className='text-1'>
                <div className='t1'>We <span className='we'>Build</span> Everything</div>
                <div className='t2'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose.The design of buildings and the space within the site surrounding the buildings that have human occupancy.</p></div>
                <div className='t3'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose.</p></div>
            </div>
            <img className='icon1' src={require('./images/icon-1.png')} alt=""></img>
           <div className='ic'><img className='picture1' src={require('./images/pic3.png')} alt=""></img>
        </div>
        <div className='box'>
            <div className='info'>More Info</div>
        </div>
        </div> 
      
        </div>
    );

}