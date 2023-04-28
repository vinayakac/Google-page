import React from 'react'
import "./City.css"

export default function City() {
  return (
    <div>
        <div className='city-container'>
            <div className='City'></div>
                <input className="content-9" placeholder="City" />
            <div className='State'></div>
                <input className="content-10" placeholder="State" />
        </div>
    </div>
  )
}
