import React from 'react';
import './Notice.css';

export default function Note(){
    return(
        <div className='note'>
            <div className='box'>
                <div className='box-1'>
                    <div className='box1-1'>
                    <img className='icon-2' src={require('./images/io1.jpg')} alt=""></img>
                        
                    </div>
                    <div className='box1-2'>Your Ride Book Succefully!</div>
                </div>
                <div className='box-2'></div>
                <div className='box-3'>
                    <div classname='box3-1>Open</div>
            </div>
        </div>
    );
}