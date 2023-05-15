import React from 'react';
import "./icon1.css"
import Nav from './nav.js'
// import Body1 from './body.js'


const Icon1 = () => {
    return <div className='page-layout'>
            <div className='header'>
                <div className='icon_1'>
                    <img className="ic-1" src={require('./images/icon1.png')} alt=""/>
                    <img className="txt-1" src={require('./images/text1.png')} alt=""/>
                    
                </div>

                <div className='line'></div>
                <div className='icon_2'>
                <img className="ic-2" src={require('./images/icon2.png')} alt=""/>
                <img className="txt-2" src={require('./images/text2.png')} alt=""/>
                
                </div>

                <div className='section2'>
                    <Nav />
                </div>
            </div>

            
            
    </div>;
}



export default Icon1;