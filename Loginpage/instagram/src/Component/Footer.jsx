import React from 'react'
import "./Footer.css"
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'

export default function Footer() {
  return (
    <div className='box-4'>
      <div className='footer-section1'>
        <Section1></Section1>
      </div>
      <div className='footer-section2'>
        <Section2></Section2>
      </div>
    </div>
  )
}
