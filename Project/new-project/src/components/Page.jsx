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

            {/* <Project></Project> */}
            <div><Project></Project></div>

            {/* <div>
                <Testimonials></Testimonials>
                </div>
                <div>
                <Test></Test>
            </div> */}
        </div>
    )
}
