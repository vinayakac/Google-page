import React from 'react';
import './Note.css'

export default function Whyus(){
    return(
        <div className='why-container'>
            <div className='heading'>Why Us?</div>
            <div className='body'>
                <div className='project'>
                    <img className='icon-1' src={require('./images/icon1.png')} alt=""></img>
                    <div className='text1'>Building Projects</div>
                    <div className='text2'>Baladi has more than 10+ active construction projects</div>
                </div>
                <div className='consultans'>
                <img className='icon-2' src={require('./images/icon2.png')} alt=""></img>
                <div className='text3'>Top Consultants</div>
                <div className='text4'>Baladi has best builder consultant in India</div>
                </div>
                <div className='satisfaction'>
                <img className='icon-3' src={require('./images/icon3.png')} alt=""></img>
                <div className='text5'>Satisfaction</div>
                <div className='text6'>We have more than 100+ satisfied customers</div>
                </div>
            </div>
        </div>
    );
}