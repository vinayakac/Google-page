import React from 'react';
import './About2.css'

export default function Last() {
    return (
        <div className='part'>
            <div className='part3'>
                <div className='text-3-1'><span className="text">Working</span> Process</div>
                <div className='t'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose.The design of buildings and the space within the site.</p></div>
                <div className='tt'><p>The design of buildings and the space within the site surrounding the buildings that have human occupancy.</p></div>
            </div>
            <div className='part4'>
                <div className='part4-1'>
                    <div className='p4-1'>
                        <img className='p9' src={require('./images/i1.png')} alt=""></img>
                    </div>
                    <div className='li-1'>
                        <div className='p4-2'>Best Quality</div>
                        <div className='p4-2-1'>Baladi has more than 10+ active construction projects</div></div>
                </div>


                <div className='part4-2'>
                    <div className='p4-2-11'>
                        <img className='p8' src={require('./images/i2.png')} alt=""></img>
                    </div>
                    <div className='li-2'>
                    <div className='p4-2-2'>Advanced Equipments</div>
                    <div className='p4-2-2-1'>The design of buildings and the space within the site surrounding</div>
                    </div>
                </div>


                <div className='part4-3'>
                    <div className='p4-3-1'>
                        <img className='p7' src={require('./images/i3.png')} alt=""></img>
                    </div>
                    <div className='li-3'>
                    <div className='p4-3-2'>Top Rated</div>
                    <div className='p4-3-2-1'>Baladi has more than 10+ active construction projects</div>
                    </div>
                </div>


                <div className='part4-4'>
                    <div className='p4-4-1'>
                        <img className='p6' src={require('./images/i4.png')} alt=""></img>
                    </div>
                    <div className='li-4'>
                    <div className='p4-4-2'>Modern Tools</div>
                    <div className='p4-4-3'>The design of buildings and the space within the site surrounding</div>
                    </div>
                </div>

            </div>
        </div>
    );
}