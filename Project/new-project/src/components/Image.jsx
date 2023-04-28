import React from "react";
import './Image.css';

export default function Image(){
    return(
        <div className="Header-container">
            <div className="image">
                <div className="image1">
                <img src='./backimg.png' alt='#' className="logo"/>
                <div className="image2">
                <img src='./vector.png' alt='#' className="vector"/>
                <div className="Property">15+</div>
                    <div className="pro1">Property Build</div>
                    <div class="vl"></div>
                </div>

                
                
                <div className="image3">
                <img src='./vector1.png' alt='#' className="vector1"/>
                <div className="Property1">07</div>
                    <div className="pro2">Awards Gained</div>
                    <div class="vl1"></div>
               
                </div>


                <div className="image4">
                <img src='./vector2.png' alt='#' className="vector2"/>
                <div className="Property2">50+</div>
                    <div className="pro3">Happy Customers</div>
                    <div class="vl2"></div>
                </div>


                <div className="image5">
                <img src='./vector3.png' alt='#' className="vector3"/>
                <div className="Property3">02+</div>
                    <div className="pro4">Years Experience</div>
                    
                </div>
                </div>
            </div>
            
        </div>
    )
}