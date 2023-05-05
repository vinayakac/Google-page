import React from 'react'
import stick from '../Assests/stick.png'
import Picture1 from '../Assests/Picture1.png'
import Flower from '../Assests/flower.png'
import stickr from '../Assests/stickr.png'
import "./Award.css"



export default function Award() {
     return (
          <div className="award">
               <div className='award-title'>
                    <div className='award-head'>
                         <text>Awards Recieved</text>
                    </div>
                    <div className='award-text'>
                         <text>We have been recieved many awards</text>
                    </div>
               </div>
               <div className='award-image'>
                    <img src={stick} alt="#" className='stick-left' />
                    <div className='award-image2'>
                         <img src={Flower} alt="#" className='award-flower1' />
                         <div className='award-image3'>
                               <img src={Picture1} alt="#" className='award-picture1' />
                         </div>     
                    </div>
                    <img src={stickr} alt="#" className='stick-right' />
               </div>
          </div>
     )
}
