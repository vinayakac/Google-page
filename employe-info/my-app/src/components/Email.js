import React from 'react'
import "./Email.css"

export default function Email() {
  return (
    <div>
        <div className='email-container'>
            <div className='Email'>Email ID</div>
                <input className="content-5" placeholder="example@examle.com" />
            <div className='PHNO'>Phone Number</div>
                <input className="content-6" placeholder="+00 xxxxxxxxxx" /> 
        </div>
    </div>
  )
}
