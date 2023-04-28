import React from 'react'
import "./Name.css"

export default function Name() {
  return (
    <div>
        <div className='name-container'>
            <div className='Name'>Name</div>
                <input className="content-1" placeholder="First name" />
            <div className='LName'></div>
                <input className="content-2" placeholder="Last name" />  
        </div>
    </div>
  )
}

