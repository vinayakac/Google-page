import './Upcoming.css'
import Slider from "react-slick";
import Slides_data from './UpcomingSlides.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                            <img src={slide.image} alt=" " />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}
export default UpcomingProject;
