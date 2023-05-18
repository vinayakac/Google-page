import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide.json'
import './ServiceSlider.css';

const Sliding = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="slider">
            {/* <div className="service-container">
              
            </div> */}
            <Slider {...settings}>
                {Slide.map((slide) => (
                    <div key={slide.id}>
                        <div className='card-image'>
                            <img src={slide.image} alt="    " />
                        </div>


                        <div className="text"> {slide.title}</div>
                        <div className="text_subheading">{slide.subtitle}</div>
                        <div className="price">{slide.price}</div>
                        <button>
                        <div className="button1">{slide.button}</div></button>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Sliding;