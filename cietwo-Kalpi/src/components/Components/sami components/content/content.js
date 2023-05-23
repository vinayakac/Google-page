import React from 'react'
import './content.css'


const Content = () => {
    return (
        <div className='content-container'>
            <div className='content-1'>
                <div className='content-1a'>
                    {/* <span className='content-1a-text'>We 
                    <span className='plan-text'> Plan, Build</span> and Oversees
                    Construction of your <span className='build-text'>Buildings</span></span> */}
                </div>
                <div className='content-1b'>
                    <div className='content-text-1b'>
                        <span className='para-text'>The design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose</span>
                        
                </div>
                <button className='btn-schedule' type='submit'>Make Schedule to talk</button>
                </div>
            </div>
            <div className='content-2'>
                <img  className="logo-2" src={require('./images/contente-logo-2a.png')} alt='' />
            </div>
        </div>
    )
}
export default Content