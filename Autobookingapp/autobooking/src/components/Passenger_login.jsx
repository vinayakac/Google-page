import React from 'react'
import './Login.css'
import { useState } from 'react';

const Login =()=>{
    const [popupStyle, showPopup] = useState("hide");

    const popup =() =>{
      showPopup("Login-popup")
      setTimeout(()=> showPopup("hide"), 3000)
    }
  return (
    <div>
          <div className='cover'>

          <div className='signup'>
        <button className='sign'>Signup</button>
      </div>
      
      <div className='login'>
      <h1>Login</h1></div>
      <div className='email'>
      <input type="text" placeholder='email'className='mail'/></div>
      <div className='phone'>
      <input type="Phone Number" placeholder='Phone Number' className='phone1'/></div>
      <div className='password'>
      <input type="password" placeholder='password' className='password1'/></div>
      <div className='forgot'>
      <input type="Forgot password" placeholder='Forgot password' className='forgot1'/></div>

      <div className='log' onClick={popup}>
        <button className='log1'>Login</button>
        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Email or Password incorrect</p>
        </div>
        
      </div>

    
   
    </div>
    </div>
  )
}

export default Login