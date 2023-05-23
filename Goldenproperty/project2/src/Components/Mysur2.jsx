
import React from "react";
import './Mysur2.css';

export default function Section2(){
    return(
        <div className='body2-2'>
                    <div className='b-1'>
                        <div className="wat">
                        <div className="wat-1"><img className='w-1' src={require('./Images/water.png')} alt=""></img></div>
                        <div className="wat-2">Water Connectivity</div>
                        </div>
                        <div className="wat-text">According to NITI Aayog, mysuru has 86% water connectivity for house hold usage, a landmark in itself.</div>
                    </div>


                    <div className='b-2'>
                    <div className="educ">
                        <div className="educ-1"><img className='e-1' src={require('./Images/education.png')} alt=""></img></div>
                        <div className="educ-2">Education Hub</div>
                        </div>
                        <div className="educ-text">Mysuru is an education hub, with more than 250+ institutions.</div>
                    </div>




                    <div className='b-3'>
                    <div className="wea">
                        <div className="wea-1"><img className='we-1' src={require('./Images/weather.png')} alt=""></img></div>
                        <div className="wea-2">Pleasant Weather</div>
                        </div>
                        <div className="wea-text">One of the cleanest cities in india. Mysuru was declared as the cleanest city for several years.</div>
                    </div>




                    <div className='b-4'>
                    <div className="sf">
                        <div className="sf-1"><img className='safe-1' src={require('./Images/safe.png')} alt=""></img></div>
                        <div className="sf-2">Safe City</div>
                        </div>
                        <div className="sf-text">Mysuru is an education hub, with more than 250+ institutions.</div>
                    </div>

                </div>

    );
}
