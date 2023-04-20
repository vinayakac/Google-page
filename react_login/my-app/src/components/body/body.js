import React from 'react'
import "./body.css"
import "./images/fb_logo.png";

const Body =() => {
    return(
        <div className='layout'> 

        <div className='component-1'>
            <div className='logo-container'>
            <img className="logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </div>
            <h2 className="logo_text">Facebook helps you connect and share with the people in your life.</h2>
        </div>
        
    
        <div className='component-2'>
            <div className='login-container'>
                <input type='text'  className="email" placeholder='Email address or phone number'></input>
                <input type='password' className="password" placeholder='Password'></input>
                <button type='submit' className="login-button">Log in</button>
                <a className="forgot-password" href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxNTM5MDQ1LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login" waprocessedanchor="true">Forgotten password?</a>
                <div className="line"></div>
                <button type='submit' className="create-button">Create new account</button>
                
            </div>
            <div id="reg_pages_msg" className="create-page">
            <a href="/pages/create/?ref_type=registration_form" className="page">Create a Page</a> for a celebrity, brand or business.</div>
            
        </div>

        </div>
    )
}
export default Body
