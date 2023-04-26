import React from "react";
import "./Project.css";

export default function Project(){
    return(
        
        <div className="Body-container">
            <h1>
            <div className="section1">Projects</div></h1>

            <div className="section2">
                <div className="build">
                <img src='./build.png' alt='#' className="sec2-1"/></div>
                <h4>
                <div className="sec2-2">Upcoming Projects</div></h4>
            </div>

            <div className="section3">
                <div className="build1">
                <img src='./build_2.png' alt='#' className="sec3-1"/></div>
                <h4>
                <div className="sec3-2">Ongoing Projects</div></h4>
            </div>

            <div className="section4">
            <div className="build2">
                <img src='./build_3.png' alt='#' className="sec4-1"/></div>
                <h4>
                <div className="sec4-2">Completed Projects</div></h4>
            </div>

            <div className="section5">
                
                    <img src='./buildingimg1.png' alt='logo' className="builimg"/>
                    <div className="sec5"><h4>Rashi Gateway</h4></div>
                    <div className="sec5-1">Located adjacent the bangalore-Pune highway in Nelamangal...</div>
                    <div className="sec5-2"><h4>67.35 L-1.6 Cr</h4></div>
                    <button className="sec5-3">More info</button>
                </div>


                <div className="section6">
                
                <img src='./img2.png' alt='logo' className="builimg2"/>
                <div className="sec6"><h4>Rashi Gateway</h4></div>
                <div className="sec6-1">Located adjacent the bangalore-Pune highway in Nelamangal...</div>
                <div className="sec6-2"><h4>67.35 L-1.6 Cr</h4></div>
                <button className="sec6-3">More info</button>
            </div>

            <div className="section7">
                
                <img src='./img3.png' alt='logo' className="builimg3"/>
                <div className="sec7"><h4>Rashi Gateway</h4></div>
                <div className="sec7-1">Located adjacent the bangalore-Pune highway in Nelamangal...</div>
                <div className="sec7-2"><h4>67.35 L-1.6 Cr</h4></div>
                <button className="sec7-3">More info</button>
            </div>

            <div className="section8">
                
                <img src='./img4.png' alt='logo' className="builimg4"/>
                <div className="sec8"><h4>Rashi Gateway</h4></div>
                <div className="sec8-1">Located adjacent the bangalore-Pune highway in Nelamangal...</div>
                <div className="sec8-2"><h4>67.35 L-1.6 Cr</h4></div>
                <button className="sec8-3">More info</button>
            </div>
           
        </div>
    )
}
