import React from 'react'
import instagramLogoImage from '../assests/logo-instagram.png'
import "./Logo.css"

export default function Logo() {
  return (
    <div>
      <img src={instagramLogoImage} alt="#" className='instagram-logo'/>
    </div>
  )
}
