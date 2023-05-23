
import React from "react";
import './Mysur3.css';

export default function Section3(){
    return(
        <div className='body2-3'>
                    <div className='b-5'>
                        <div className="cln">
                        <div className="cl-1"><img className='cln-1' src={require('./Images/clean.png')} alt=""></img></div>
                        <div className="cl-2">Cleanest City</div>
                        </div>
                        <div className="cl-text">One of the cleanest cities in india. Mysuru was declared as the cleanest city for several years.</div>
                    </div>


                    <div className='b-6'>
                    <div className="city">
                        <div className="ct-1"><img className='ci-1' src={require('./Images/city.png')} alt=""></img></div>
                        <div className="ct-2">City Connectivity</div>
                        </div>
                        <div className="ct-text">According to NITI Aayog, mysuru has 86% water connectivity for house hold usage, a landmark in itself.</div>
                    </div>




                    <div className='b-7'>
                    <div className="hsp">
                        <div className="hsp-1"><img className='hs-1' src={require('./Images/hospital.png')} alt=""></img></div>
                        <div className="hsp-2">Hospitals</div>
                        </div>
                        <div className="hsp-text">Mysuru is an education hub, with more than 250+ institutions.</div>
                    </div>




                    <div className='b-8'>
                    <div className="trn">
                        <div className="trn-1"><img className='train-1' src={require('./Images/train.png')} alt=""></img></div>
                        <div className="trn-2">Double Track Train</div>
                        </div>
                        <div className="trn-text">One of the cleanest cities in india. Mysuru was declared as the cleanest city for several years.</div>
                    </div>

                </div>

    );
}