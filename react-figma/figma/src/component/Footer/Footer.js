import React from 'react';
import "./Footer.css"
import Navbar from './Navbar.js'

const Footer=() => {
    return(
        <div class="footer">
            <div className='footer-icon'>
                <img className="home" src={require('./images/home_icon.png')} alt=""/>
                <img className="favorite" src={require('./images/favorite.jpg')} alt=""/>
            </div>
            <div className='text-icon'>
                <Navbar></Navbar> 

             </div>
        </div>
    );
}

export default Footer;