import React from 'react'
import fb from './R.png'
import "./Facebook.css"

export default function Facebook() {
    //console.log(fb)
    return (
        <div className='fb1'>
           
            <img src={fb} alt="#" className='facebook-logo'/>
       
            <div className="fb-button1">
                <p className='login1'>Log in with Facebook</p>
            </div>
        </div>
    )
}
