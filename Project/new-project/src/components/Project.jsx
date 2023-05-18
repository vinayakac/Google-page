import React from 'react'
import './Project.css';
// import Dropdown from './components/Dropdown';
// import { useState } from 'react';

export default function Project() {
  // const [selected, setSelected]=useState("Completed Projects");
  return (
    <div className='Body-container'>
      <div className='body'>
        <div className="section1">Projects</div>
        <div className='body-1'>
          <div className='section2'>
            <div className='build'>
              <div className="build1">
                <img src='./build.png' alt='#' className="sec2-1" />
              </div>
              <div className="sec2-2">Upcoming Projects</div>
            </div>
          </div>

          <div className='section3'>
            <div className='build-1'>
              <div className="build1-1">
                <img src='./build_2.png' alt='#' className="sec3-1" />
              </div>
              <div className="sec3-2">Ongoing Projects</div>
            </div>
          </div>


          <div className='section4'>
            <div className='build-2'>
              <div className="build2-1">
                <img src='./build_3.png' alt='#' className="sec4-1" />
              </div>
              <div className="sec4-2">Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
      <div className='body1'>
        <div className='body2-1'>
          {/* <Dropdown/> */}



        </div>
      </div>
    </div>
  )
}
