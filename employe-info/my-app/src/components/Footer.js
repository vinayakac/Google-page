import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
    <div>
        <div className='Footer-container'>
            <div className='Button'>
                <button className="button" type="submit" name="login" value="Login">Cancel </button >
            </div>
            <div className='Button2'>
                <button className="button2" type="submit" name="login" value="Login">Submit </button >
            </div>
        </div>
    </div>
  )
}
export default Footer;
