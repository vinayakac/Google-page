import React from 'react'
import "./Input.css"

export default function Input() {
    return (
        <div>
            <div className='input-box'>
                <input
                    type='text'
                    placeholder='Phone number, username, or email' />
            </div>
            <div className='input-box1'>
                <input
                    type='Password'
                    placeholder='Password' />
            </div>
            <div className='login-buuton-box'>
                <button className='login-button'>Log in</button>
            </div>
        </div>

    )
}
