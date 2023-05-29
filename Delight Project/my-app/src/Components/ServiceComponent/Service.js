import React from 'react'
import Slider from 'react-slick'
import './Service.css'
import Slides_data from './Service.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
    <div className='delight-service-container'>

        <div className='del-service-header'>

            <div className='del-service-heading'>
                <span className='del-heading-text'>Explore Our Services</span>
            </div>

            <div className='del-service-subheading'>
                <span className='del-subheading-text'>Find our best services which are available to you</span>
            </div>

        </div>

        <div className='del-service-slider'>

        <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='s'></div>
                    </div>
                ))}
            </Slider>

        </div>
        

    </div>
  )
}

export default Service
