import React from 'react'
import "./Body.css"
import Logo from "./Logo.jsx"
import Input from './Input.jsx'
import OR from './Or.jsx'
import Have from './Have.jsx'



export default function Body() {
  return (
    <div className='login-container'>
      <div className='box-1'>
        <div className='box-1-logo'>
          <Logo></Logo>
        </div>
        <div>
          <Input></Input>
        </div>
        <div>
          <OR></OR>
        </div>
      </div>
      <div className='box-2'>
        <Have></Have>
      </div>
    </div>
  )
}
