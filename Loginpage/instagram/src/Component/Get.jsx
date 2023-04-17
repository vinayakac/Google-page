import React from 'react'
import playstoreImage from '../assests/play.png'
import appstoreImage from '../assests/microsoft.png'


export default function Get() {
  return (
    <div className='box-3'>
        <div className='box-3-1'>
            <p>Get the app</p>
        </div>
        <div className='store'>
            <div>
            <img src={playstoreImage} alt="#" className='play-logo'/>
            </div>
            <div>
            <img src={appstoreImage} alt="#" className='microsoft-logo'/>
            </div>
        </div>
      
    </div>
  )
}
