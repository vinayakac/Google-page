import React from 'react'
import'./loginform.css'

const LoginForm=() => {
    return (
        <div className="page-container">
        <div className="body-container">
            <div className="section1">
                <div className="section1-1">
                    <h1 className="login-1">Login to Designmodo</h1>
                    <div className="section1-1-1">
                        <div className="email">Your Email
                            <span className="star">*</span>
                        </div> 
                        <div className="section1-1-1-1">
                            <input className="text" placeholder="Your email" />
                        </div>   
                    </div>
                    <div className="section1-1-2">
                        <div className="password">Password 
                            <span className="star">*</span>
                            
                        </div>
                        
                        <div className="section1-1-2-1">
                            <input className="text" placeholder="Password" />
                        </div>
                    </div>
                    <div className="section1-1-3">
                        <div className="checkbox">
                            <label className="remember me">
                                <input className="box" type="checkbox" checked="checked" />
                                <span className="checkbox"></span> Remember me</label> 
                        </div>
                    </div>
                    <div class="section1-1-4">
                        <label>
                        <input className="box"  type="checkbox" name="acceptance" value="Y" />
                        <span className="checkbox">  I agree to storage of my data according to </span>
                        <a href="https://designmodo.com/privacy-statement/" class="primary" target="">Privacy Policy</a>
                        </label>    
                    </div>
                    <div className="section1-1-5">
                        <input type="hidden" id="" name="" value="" />
                        <button className="button1" type="submit" name="login" value="Login">Login </button >
                        <a href="https://designmodo.com/my-account/sign-up/" class="button2" type="submit">Create Account</a>
                    </div>
                    <div className="margin">
                    <a href="https://designmodo.com/my-account/lost-password/" class="margin">Forgot your password or cannot log in?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default LoginForm
