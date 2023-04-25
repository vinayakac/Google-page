import React from "react";
import './Page.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Page(){
    return(
        <div className="Page-container">
            <div>
                <Header></Header>
            </div>

            <div><Body></Body></div>

            
        </div>
    )
}
