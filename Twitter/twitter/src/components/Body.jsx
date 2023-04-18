import React from "react"
import "./Body.css"


export default function Body(){
    return(
       <div className="body-container">

        <div className="section1">
            <h2>
                <div className="section1-1">
                    Sign in to Twitter
                </div>
            </h2>
        </div>

        <div className="section2">
            <div className="section2-1">
                <div className="section2-2">
                    <div className="sec1"><img src="goog.png"></img></div>
                    <div className="sec2">Sign in with Google</div>
                </div>

            </div>
        </div>

        <div className="section3">
            <div className="section3-1">
                <div className="section3-2">
                    <div className="sec3-1"><img src="apple.png"></img></div>
                    <h4>
                        <div className="sec3-2">Sign in with Apple</div>
                    </h4>
                </div>
            </div>
        </div>

        <div className="section4">
                    <hr></hr>
                    <span>or</span>
                </div>
        <div className="section5">
            <div className="section5-1">
                <div className="sec5-1">
                    <placeholder>Phone, email, or username</placeholder>
                    </div>
                    </div>
                </div>

                <div className="section6">
                    <h2>
                        <div className="section6-1">
                            <div className="sec6-1">Next</div>
                            </div>
                    </h2>
                    
                </div>

                <div className="section7">

                    <div className="section7-1">
                        <h4>
                        <div className="sec7-1">Forgot password?</div>
                    </h4>

                    </div>
                </div>

       </div>
    )
}