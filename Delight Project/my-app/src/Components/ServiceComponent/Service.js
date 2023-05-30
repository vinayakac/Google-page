import React from 'react'
import Slider from 'react-slick'
import './Service.css'
import Slides_data from './Service.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slide1 from '../ServiceComponent/images/slide-image-5.png'


const Service = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    }  
    console.log(Slides_data) 
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
                         
                            <div className='del-slider-cards'>
                                <div className='slide-card-image'>
                                 
                                <img src={slide.image} alt="#" className='customer-slide-image'></img>
                                {/* <img src={Slide1} alt="#" className='customer-slide-image'></img> */}

                                {/* <div className='del-text'>
                                <span className='slide-card-span-text'>{slide.title}</span>

                                </div> */}
                                </div>
                               
                                {/* <div className='slide-card-image'>
                                
                                <img src={Slide1} alt="#" className='customer-slide-image'></img>
                                </div> */}

                                {/* <div className='slide-card-text'>

                                    
                                        <span className='slide-card-span-text'>It really saves me time and effort. Chamer is exactly what our business has been lacking. business  business </span>
                                        <span className='slide-card-span-text'>{slide.title}</span>

                                    
                                </div> */}
                            </div>                       
                        
                    </div>
                ))}
            </Slider>
        </div>
        

    </div>
  )
}

export default Service
