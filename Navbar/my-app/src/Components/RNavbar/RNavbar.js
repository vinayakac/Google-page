import React, { useState } from 'react'
import './RNavbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

const RNavbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const MENU = [
        {
            title: 'HOME',
            link: '#'
        },
        {
            title: 'ABOUT',
            link: '#'
        },
        {
            title: 'PROJECT',
            link: '#'
        },
        {
            title: 'CONTACT',
            link: '#'
        }
    ]
    
    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }


    
  return (
    <nav>
        <div className='logo-container'>
        <img  className="navbar-logo" src={require('./images/navbarlogo.png')} alt='' />
        </div>
        <ul className='desktop-menu'>
            {
                MENU.map((menuItem) => {
                    return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                })
            }
        </ul>
        
        {isMobileMenuOpen ? <FontAwesomeIcon className='mobile-menu-button' icon={faXmark} onClick={handleOnClick}/> : <FontAwesomeIcon className='mobile-menu-button' icon={faBars} onClick={handleOnClick}/>}
        {
            isMobileMenuOpen ? <ul className='mobile-menu'>
            {
                MENU.map((menuItem) => {
                    return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                })
            }
            </ul> : ''
        }
    </nav>
  )
}

export default RNavbar
