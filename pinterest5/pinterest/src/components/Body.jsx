import React from 'react';
//  import './Body.css';

export default function Body(){
    return(
        <div className="body-container">

        <div className="form-part">
            <div className="gmail-text">Email</div>
            <div className="gmail-input">
                <div className="g-i">Email</div>
            </div>
            <div className="password-text">Password</div>
            <div className="password-input">
                <div className="p-i">Password</div>
                <div className="p-icon">
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                        <path
                            d="M10 12a2 2 0 1 0 3.999.001A2 2 0 0 0 10 12Zm2 5a5 5 0 1 1 .001-10.001A5 5 0 0 1 12 17m0-13.5C6.455 3.5 1.751 7.051 0 12c1.751 4.949 6.455 8.5 12 8.5s10.249-3.551 12-8.5c-1.751-4.949-6.455-8.5-12-8.5">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="FG-text">Forgot your password?</div>

            <div className="login-text">
                <div className="login-text-1">Log in</div>
            </div>

        </div>
        <div className="or">OR</div>


        <div className="login-part">
            <div className="Facebook-part">
                {/* <div className="f-i"><img className="imeg">
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"</img></div> */}
                <div className="f-text">Continue with Facebook</div>
            </div>
            <div className="Google-part">
                <div className="g-p"><svg className="g-p1" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48" >
                        <g>
                            <path fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                            </path>
                            <path fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                            </path>
                            <path fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                            </path>
                            <path fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                            </path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </g>
                    </svg></div>
                <div className="g-t">Continue with Google</div>
            </div>
        </div>
        <div className="notice-part">
            <div className="line1">
                <div className="line1-1">By continuing, you agree to Pinterest's</div>
            </div>
            <div className="line2">
                <div className="line2-1">Terms of Service</div>
                <div className="line2-2">and acknowledge you've read our</div>
            </div>
            <div className="line3">
                <div className="line3-1">Privacy Policy.</div>
                <div className="line3-2">Notice at collection.</div>
            </div>
        </div>

    </div>
    );

}