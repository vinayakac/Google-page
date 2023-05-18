import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Trending.css'
import Slides_data from './Slides.json'


const NestedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  // const subSettings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div >
      <div className='trending_heading_container'>
        <span className='trending_text_heading'>Trending Projects</span>
      </div>
      <div className='trending_subheading_container'>
        <span className='trending_text_subheading'>The Noteworthy Real Estate in India</span>
      </div>
      <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='trending_image_container'>
                            <img src={slide.images} alt=" " />    
                        </div>

                        <div className="trending_text_container">
                            <div className="trending_text_container-1">
                                <span className="trending_detail_heading"> {slide.title}</span>
                                <span className="trending_detail_subheading">{slide.description}</span>
                            </div>
                        </div>
                    </div>
                ))}  
      </Slider>  
    </div>
  );
};
export default NestedSlider;

