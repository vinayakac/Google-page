import './Upcoming.css'
import Slider from "react-slick";
import Slides_data from './UpcomingSlides.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './images/image.png'
import Image1 from './images/image-1.png'
import Image2 from './images/image-2.png'
import Image3 from './images/image-3.png'
import Image4 from './images/image-4.png'


const UpcomingProject = () => {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    
  return (
    <div className='upcoming-container'>

        <div className='upcoming-header'>

            <div className='upcoming-heading'>
                <span className='upcoming-heading-text'>Upcoming Projects</span>
            </div>

            <div className='upcoming-subheading'>
                <span className='upcoming-subheading-text'>Handpicked projects for you</span>
            </div>

        </div>

        <div className='upcoming-slider'>
        <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='upcoming-slider-image'>
                            {/* <img src={slide.image} alt=" " /> */}
                            <img src={Image} alt="#" className='image'></img>
                            <div className='sector'>
                                <span className='sector-text-heading'>Golden Property - Sector 1</span>
                                <div className='sector-subheading'>
                                <img src={Image1} alt="#" className='image-1'></img>

                                <span className='sector-text-subheading'>At Devarahalli, Bilikere Hobli, Hunsur Taluk</span>
                                </div>
                            </div>
                            <div className='upcoming_sector_2'>
                                <div className='upcoming_class_1'>

                                    <div className='upcoming_section_1'>

                                        <div className='section-1_image'>
                                        <img src={Image2} alt="#" className='section-img'></img>
                                        </div>

                                        <div className='section-1_text'>
                                            <span className='section-text-1'>Sizes</span>
                                            <span className='section-text-2'>30  Plots – 20 X 30, 30 X 40, 40 x 60</span>
                                        </div>

                                    </div>

                                    <div className='upcoming_section_2'>

                                    <div className='section-2_image'>
                                        <img src={Image3} alt="#" className='section-img-1'></img>
                                        </div>

                                        <div className='section-2_text'>
                                            <span className='section-text-1'>Project Size</span>
                                            <span className='section-text-2'>2 Acre 11.5 Guntas</span>
                                        </div>
                                    </div>

                                    <div className='upcoming_section_3'>

                                    <div className='section-3_image'>
                                        <img src={Image4} alt="#" className='section-img-2'></img>
                                        </div>

                                        <div className='section-3_text'>
                                            <span className='section-text-1'>Approvals</span>
                                            <span className='section-text-2'>DCTP Approved Plot Layout</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='upcoming_class_2'>
                                <span className='upcoming_class_text'>Surrounded with greens, the GOLDENPROPERTY – SECTOR 1 comprising of 30 plots prevailing at Devarahalli, Bilikere Hobli, Hunsur Taluk,  offers you to choose the ideal way of unwinding from the host of amenities.</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
                )
                }
            </Slider>
        </div>
    </div>
  )
}
export default UpcomingProject;
