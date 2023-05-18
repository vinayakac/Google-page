import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides_data from "./Slides.json";
import './Trending.css'
// import SubSlider from "./SubSlider";

const PageSlider = ({images}) => {
    const settings = {
        dots: true,
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
            <div className='trending_heading'>

                <div className='trending_heading_container'>

                    <span className='trending_text_heading'>Trending Projects</span>
                </div>

                <div className='trending_subheading_container'>
                    <span className='trending_text_subheading'>The Noteworthy Real Estate in India</span>
                </div>

            </div>
            
            <Slider {...settings}>
                {Slides_data.map((slide) => (
                    <div key={slide.id}>
                        <div className='trending_image_container'>
                            <img src={slide.images} alt=" " />     
                            {/* <SubSlider images ={slide.images}/> */}
                            {/* <SubSlider imagePath="https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/546077f29c1b4.gif" imageAlt="A beautiful image" />  */}

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

export default PageSlider;

