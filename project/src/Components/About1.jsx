import React from 'react';
import './About1.css'

export default function Next() {
    return (
        <div className='next'>
            <div className='part2'>
                
                <img className='i1' src={require('./images/b1.png')} alt=""></img>
                <div className='ic1'><img className='pict1' src={require('./images/b2.png')} alt=""></img></div> 
                <div className='t-1'>
                    <div className='t-2'>Passion at <span className='sp'>Work</span></div>
                    <div className='t-3'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose.The design of buildings and the space within the site.</p></div>
                </div>
            </div>
            

        </div>
    );
}