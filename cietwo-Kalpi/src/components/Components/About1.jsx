import React from 'react';
import './About1.css'

export default function Next() {
    return (
        <div className='next'>
            <div className='part2'>
                
                <img className='i1' src={require('./images/b1.png')} alt=""></img>
                <div className='ic1'><img className='pict1' src={require('./images/b2.png')} alt=""></img></div>
                <div className='ic2'><img className='pict2' src={require('./images/k1.png')} alt=""></img></div> 
                <div className='ic3'><img className='pict3' src={require('./images/k2.png')} alt=""></img></div> 
               
                <div className='ic4'><img className='pict4' src={require('./images/k3.png')} alt=""></img></div>  
                <div className='ic5'><img className='pict5' src={require('./images/k5.png')} alt=""></img></div>  
                <div className='t-1'>
                    <div className='t-2'>Passion at <span className='sp'>Work</span></div>
                    <div className='t-3'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose.The design of buildings and the space within the site.</p></div>
                </div>
            </div>
            

        </div>
    );
}