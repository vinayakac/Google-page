import React from 'react'
import "./Employee.css"

export default function Employee() {
  return (
    <div>
        <div className='employee-container'>
            <div className='Employee'>Employee ID</div>
                <input className="content-3" placeholder="" />
            <div className='DOB'>Date of birth</div> 
                <input  className="Date" type='date' id='birthday' name='birthday'></input>
                {/* <input className="content-4" placeholder="DD/MM/YYYY" />  */}
        </div>
    </div>
  )
}
