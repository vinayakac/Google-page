import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides_data from "./OurClints.json";
import './OurClints.css';


const OurClints = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="slides">
            
            <h2>Amenities</h2>
            
            <h3>Go from browsing to buying</h3>
            <Slider {...settings}>
               
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='service_container'>
                            <img src={slide.image} alt=" " />
                            <span className="service-details-heading"> {slide.title}</span>
                            <span className="service-details-subheading">{slide.description}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurClints;