
import './SlickSlider.css'
import SlickSlider from './SlickSlider.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

const SlickSliding = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
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

    return(
        <div className='slide'>
            <div className='test'>
            <h1>Testimonials</h1></div>

            <Slider {...settings}>
            {SlickSlider.map((slide) =>(
                <div className='final-part'>
                    <div className='box'>
                        <div className='box-1'>
                        <div className='circle'>
                        <img src={slide.image1} alt="" className='circle1' /></div>
                        <div className='men'>
                        <img src={slide.image2} alt="" className='man' /></div>
                        <div className='colum'>
                        <img src={slide.image3} alt="" className='c1' /></div>
                        <div className='colum2'>
                        <img src={slide.image4} alt="" className='c2' /></div>
                        <div className='text1'>{slide.text1}</div>
                        <div className='text2'>{slide.text2}</div>
                        <div className='text3'>{slide.text3}</div>
                        <div className='name'>
                        <span className="name1">-</span> <span className="name2"> {slide.text5}</span></div>
                        </div>
                    </div>
                </div>

            ))}
        </Slider>   
        </div>

    );
    
};
 
export default SlickSliding ;

