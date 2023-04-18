import React from 'react'
import facebooklogoImage from '../assests/R.png'

export default function Facebook() {
    return (
        <div className='fb'>
            <div>
                <img src={facebooklogoImage} alt="#" className='facebook-logo' />
            </div>
            <div className="fb-button">
                <p className='log'>Log in with Facebook</p>
            </div>
        </div>
    )
}
