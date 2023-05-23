import React from 'react';
import './Mysuru1.css';

export default function Mysuru(){
    return(
        <div className='main-section'>
            <div className='w-m'>Why Invest in Mysuru</div>
            <div className='head-1'>The  Noteworthy Real Estate in India</div>
            <div className='i'><img className='ic-1' src={require('./Images/mysur.png')} alt=""></img>
            <div className='body2'>
                <div className='body2-1'>
                     <div className='io'><img className='ic2' src={require('./Images/man.png')} alt=""></img></div>
                     <div className='ip'><img className='ic3' src={require('./Images/tree.png')} alt=""></img></div>
                </div>


                {/* <div className='body2-2'>
                    <div className='b-1'></div>
                    <div className='b-2'></div>
                    <div className='b-3'></div>
                    <div className='b-4'></div>

                </div> */}
                {/* <div className='body2-3'></div> */}
            </div>
            </div>
        </div>
    );
}