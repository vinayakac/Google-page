import React from 'react'
import "./Body.css"
import Logo from "./Logo.jsx"
import Input from './Input.jsx'

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
      </div>
    </div>
  )
}
