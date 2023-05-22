import React from 'react'
import "../Component/Footer.css"
import Logo from '../Assests/gold.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-content-container'>
                    <div>
                        <div class="footer-contentSection-1">
                            <div class="footer-logo-container">
                                <img src={Logo} alt="Stick" className="logo-gold" />
                            </div>
                            <p>GOLDENPROEPRTY CASTLE a concern of CANH Infrastructure Ltd., is a project catering to the needs of common man.
                                It offers Residential plots at Mysuru – Hunsur NH 275 near Manuganahalli Checkpost.
                                A destination that is favourite among residents of Musuru and surrounding areas .
                                This is a project to match your lifestyle requirments. We have been serving clientsfor a number of years.
                            </p>
                            <div className="footer-socialmedia-link-container-1"></div>
                        </div>
                        <div class="footer-contentSection-2"></div>
                        <div class="footer-contentSection-3"></div>
                    </div>
                    <div className="footer-devider"></div>
                    <div className="footer-bottom">Copyright © 2021 Golden Property - All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}
