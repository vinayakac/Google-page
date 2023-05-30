import React from 'react'
import './Ourclient.css'
import Slider from 'react-slick';
import Slide_data from './Ourclient.json'
// import Ologo from '../OurclientsComponent/images/client-image-5.png'

const Ourclient = () => {
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
    <div className='ourclient-container'>

      <div className='ourlient-header'>

        <div className='ourclient-heading'>
            <span className='ourclient-heading-text'>Leading Real Estate Developers</span>
        </div>

        <div className='ourclient-subheading'>
            <span className='ourclient-subheading-text'>Best Real Estate Developers</span>
        </div>

      </div>

      <div className='ourclient-slider'>
      <Slider {...settings}>
                {Slide_data.map((slide) => (
                    <div key={slide.id}>

                        <div className='ourclients-details-container'>
                            <img className='ourclient-slider-image' src={slide.image} alt=" " />
                            {/* <img src={Ologo} alt='#' className='location-image-1'></img> */}
                            <span className="service-details-heading"> {slide.title}</span>
                        </div>

                    </div>
                ))}
            </Slider>
      </div>

    </div>
  )
}

export default Ourclient
