import React from 'react'
import './service.css'

const Service = () => {
    return (
        <div className="service-container">
            <div className='service-content-1'>
                <span className='service-text'>Services</span>
            </div>
            <div className='service-content-2'>
                <div className='service-1'>
                <img  className="service-1-logo" src={require('./images/service-1.png')} alt='' />
                <div className='service-content-1-text'>
                    <span className='service-c1-text'>Resell Assistance</span>
                    <span className='service-c1-text-2'>100% best and good quality items</span>
                </div>
                </div>
                <div className='service-2'>
                <img  className="service-2-logo" src={require('./images/service-2.png')} alt='' />
                <div className='service-content-2-text'>
                    <span className='service-c2-text'>Solar Rooftop</span>
                    <span className='service-c2-text-2'>100% best and good quality items</span>
                </div>
                </div>
                <div className='service-3'>
                <img  className="service-3-logo" src={require('./images/service-3.png')} alt='' />
                <div className='service-content-3-text'>
                    <span className='service-c3-text'>Property Management</span>
                    <span className='service-c3-text-2'>100% best and good quality items</span>
                </div>
                </div>
                <div className='service-4'>
                <img  className="service-4-logo" src={require('./images/service-4.png')} alt='' />
                <div className='service-content-4-text'>
                    <span className='service-c4-text'>Creating Secured Community</span>
                    <span className='service-c4-text-2'>100% best and good quality items</span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Service