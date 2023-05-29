import React from 'react'
import './Header.css'
import Logo from './images/header-logo.png'
import Cartlogo from './images/cart-logo.png'
import Favlogo from './images/fav-logo.png'
import Contactlogo from './images/contact-logo.png'

const Header = () => {
  return (
    <div className='Header-container'>

        <div className='header-logo-container'>
          <img src={Logo} alt='#' className='header-logo'></img>
        </div>

        <div className='header-link-container'>

          <div className='header-link-1'>
            <span className='link-home'>HOME</span>
          </div>

          <div className='header-link-2'>
            <span className='link-about'>ABOUT</span>
          </div>

          <div className='header-link-3'>
          <span className='link-news'>NEWS</span>
          </div>
          
          <div className='header-link-4'>
          <span className='link-awards'>AWARDS</span>
          </div>

          <div className='header-link-5'>
          <span className='link-agent'>AGENT</span>
          </div>

          <div className='header-link-6'>
          <span className='link-invest'>INVEST</span>
          </div>
          
          <div className='header-link-7'>
          <span className='link-contact'>CONTACT</span>
          </div>

        </div>

        <div className='header-action-container'>

          <div className='header-action-1'>
            <img src={Cartlogo} alt='#' className='cart-image'></img>
          </div>

          <div className='header-action-2'>
            <img src={Favlogo} alt='#' className='fav-image'></img>
          </div>

          <div className='header-action-3'>
          <img src={Contactlogo} alt='#' className='contact-image'></img>
          </div>

          <div className='header-action-4'>
            <span className='login'>LOGIN</span>
          </div>

        </div>

    </div>
  )
}

export default Header
