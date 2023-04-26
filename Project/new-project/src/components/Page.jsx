import React from "react";
import './Page.css';
import Image from "./Image";
import Project from "./Project";
import Testimonials from "./Testimonials";

export default function Page(){
    return(
        <div className="Page-container">
            <div>
                <Image></Image>
            </div>

            <div><Project></Project></div>

            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    )
}
