import React from "react";
import './Page.css';
import Image from "./Image";
import Project from "./Project";
// import Testimonials from "./Testimonials";
// import Test from "./Test";
// import Project from "./Project";

export default function Page(){
    return(
        <div className="Page-container">
            <div>
                <Image></Image>
            </div>

           
            <div><Project></Project></div>

          
        </div>
    )
}
