import React from 'react';
import './Why.css';

export default function Whyus(){
    return(
        <div className='header'>
            <div className='head'>Why Us?</div>

           <div className='head-line'>At Golden Property, we understand the significance of our customer’s needs and strive to serve it.</div>


           <div className='body'>
            <div className='body-1'>
                <div className='sub1'>
                    <div className='sub1-1'><div className="num">01</div></div>
                    <div className='sub1-2'>
                   <div className='h1'> Transparency</div>
                   <div className='h2'> At Golden Property, we PROMISE that utmost transparency in our processes and offer best practices driven by our ethos.</div>
                    </div>
                </div>



                <div className='sub2'>
                <div className='sub2-1'>
                    <div className='num2'>02</div>
                </div>
                <div className='sub2-2'>
                    <div className='h3'>Top Notch Services</div>
                    <div className='h4'>At Golden Property, we are COMMITTED to provide superlative service to our customers to make it a hassle-free experience.</div>
                </div>
                
                </div>




                <div className='sub3'>
                    <div className='sub3-1'>
                        <div className='num3'>03</div>
                    </div>
                    <div className='sub3-2'>
                        <div className='h5'>Satisfaction</div>
                        <div className='h6'>At Golden Property, we offer the best market pricing and believe this is the ideal way of expressing our gratitude.</div>
                    </div>
                </div>





            </div>

            <div className='body-2'>
            <div className='i1'><img className='icon-1' src={require('./Images/home.png')} alt=""></img>
            <div className='i2'><img className='icon-2' src={require('./Images/pht.png')} alt=""></img></div>
            <div className='i3'><img className='icon-3' src={require('./Images/side.png')} alt=""></img></div>
            </div>
            </div>
           </div>
        </div>
        
    );
}