import React from 'react'
import facebookLogoImage from '../assests/R.png'

export default function Facebook() {
    return (
        <div className='fb1'>
            <div>
                {facebookLogoImage}
                <img src={facebookLogoImage} alt="#" className='facebook-logo11' />
            </div>
            <div className="fb-button1">
                <p className='login1'>Log in with Facebook</p>
            </div>
        </div>
    )
}
