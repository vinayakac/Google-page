import React from 'react';
import "./Header.css"
import Navbar from './Nav.js'


 const Header=() => {
    return(
        <div className="header">
            <div className='icon'>
                <div className='logo1'>
                    <img className="aro" src={require('./images/arrow.png')} alt=""/>
                    <div className='text-1'><p><b>OurMenu</b></p></div>

                    <img className="add" src={require('./images/add_to_cart.png')} alt=""/>
                    
                </div>
            </div>


            <div className='text'>
                <Navbar></Navbar>
            </div>
        </div>
    );
 }

export default Header;