// import React, { Component } from "react";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import Slides_data from './Slide.json'
import Image from '../Assests/image-1.png'




const Sliding = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="a1">
            <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className="a2">
                            {/* <img src={slide.image} alt=" "></img> */}
                            <img src={Image} alt="#" className="img1"></img>
                            <section className="award-details">
                                <div clasName="award-details-heading">
                                    Farm Land Daksha Chandana
                                </div>
                                <div className="award-subdetails">
                                    Those days are now passé when purchasing a home used to be a very arduous task...
                                </div>

                            </section>
                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    )
}

export default Sliding;