import React from 'react';
import "./nav.css"

 
const Nav = () => {
    return(
        <div className='nav'> 
        <div className='text_3'>
            <text className='txt3'>Home</text>
            {/* <div className='ar1'> */}
                <img className="ar-1" src={require('./images/ar1.png')} alt=""/>
            {/* </div> */}
        </div>
        <div className='text_4'>
            <text className='txt4'>About</text>
                <img className="ar-2" src={require('./images/ar2.png')} alt=""/>

            {/* <div className='ar2'></div> */}
        </div>
        <div className='text_5'>
            <text className='txt5'>Project</text>
                <img className="ar-3" src={require('./images/ar3.png')} alt=""/>

            {/* <div className='ar3'></div> */}
        </div>
        <div className='text_6'>
            <text className='txt6'>Blog</text>
                <img className="ar-4" src={require('./images/ar4.png')} alt=""/>

            {/* <div className='ar4'></div> */}
        </div>
        <div className='text_7'>
            <text className='txt7'>Awards</text>
                <img className="ar-5" src={require('./images/ar5.png')} alt=""/>

            {/* <div className='ar5'></div> */}
        </div>
        <div className='text_8'>
            <text className='txt8'>Contact</text>
                <img className="ar-6" src={require('./images/ar6.png')} alt=""/>

            {/* <div className='ar6'></div> */}
        </div>
        </div>
        
    );
          

}


   
export default Nav;