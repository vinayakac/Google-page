import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides_data from "./Slider.json";
// import './Trending.css'

const Example = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoscoll: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='trending_image_container'>
                            <img src={slide.image} alt=" " />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Example;