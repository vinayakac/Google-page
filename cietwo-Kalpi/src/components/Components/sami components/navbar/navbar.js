import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content-1'>
            <img  className="logo" src={require('./images/logo.png')} alt='' />
            </div>
            <div className='navbar-content-2'>
            <div className='home-section'>
                    <p className='home-text'>HOME</p>
                </div>
                <div className='about-section'>
                    <p className='about-text'>ABOUT</p>
                </div>
                <div className='projects-section'>
                    <p className='projects-text'>PROJECTS</p>
                </div>
                <div className='contact-section'>
                    <p className='contact-text'>CONTACT</p>
                </div>
            </div>

        </div>
    )
}
export default Navbar