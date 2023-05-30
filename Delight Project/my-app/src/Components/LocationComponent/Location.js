import React from 'react'
import './Location.css'
import Slider from 'react-slick'
import Slides_data from './Location.json'
// import Limage from '../LocationComponent/images/location-image-3.png'

const Location = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    <div className='location-container'>

      <div className='location-header'>
        
        <div className='location-heading'>
            <span className='location-heading-text'>We are Available at</span>
        </div>

        <div className='location-subheading'>
            <span className='location-subheading-text'>Handpicked projects for you</span>
        </div>

      </div>

      <div className='location-slider'>
      <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='location-details-container'>
                            <img src={slide.image} alt=" " />
                            {/* <img src={Limage} alt='#' className='location-image-1'></img> */}
                            <span className="service-details-heading"> {slide.title}</span>
                            <span className="service-details-subheading">{slide.description}</span>
                        </div>
                    </div>
                ))}
            </Slider>
      </div>

    </div>
  )
}

export default Location
