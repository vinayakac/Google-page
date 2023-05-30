import React from 'react'
import Slider from 'react-slick'
import './ongoing.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slides_data2 from './ongoing.json'
// import Image from "../onImages/image1.png"
// import Image2 from "../onImages/image2.png"
// import Image3 from "../onImages/image3.png"
// import Image4 from "../onImages/image4.png"
// import Image5 from "../onImages/image5.png"
// import Image6 from '../onImages/image6.png'
import Image7 from '../onImages/image7.png'

const ongoing = ()=> {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
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
        <div className='ongoing'>
            <div className='Header-ongoing'>
                <div className='project'>
                  <div className='on'>
                    <text>Ongoing Projects</text>
                  </div>
                </div>
                <div className='based'>
                <div className='name'>
                    <text>Based on preferences of users like you</text>
                  </div>
                </div>
            </div>
    <Slider {...settings}>
                {Slides_data2.map((slide) => (
                    <div key={slide.id}>
                  <div className='slider'>
                    <div className='box-1'>
                     <img src={Image7} alt='' className='rera-logo'></img> 
                     </div>
                        {/* {/* <div className='rectangle'>
                        <div className='heart'>
                            <img src={Image6} alt='' className='rera-logo'></img>
                        </div>
                        <div className='rrr'>
                            <img src={Image5} alt='#' className='rst'></img>
                            <img src={Image4} alt='#' className='jkl'></img>
                        </div>
                        
                        </div>
                        <div className='frame-186'>
                        <div className='text-1'>
                            <div className='abc-1'>
                            <div className='frame-1'>
                                <div className='text-3'>
                                <text>Marathon Millanium</text>
                                </div>  
                            </div>
                            <div className='frame-2'>
                                <div className='text-4'>
                                <text>Whitefield, Bangalore</text>
                                </div>
                            </div>
                            </div>
                            <div className='abc-2'>
                            <div className='pqr-1'>
                                <div className='bed'>
                                <text>Bedroom</text>
                                </div>
                                <div className='tuv'>
                                <div className='img'>
                                    <img src={Image} alt='#' className='opq'></img>
                                </div>
                                <div className='lmn'>
                                    <div className='text-5'>
                                    <text>5 room</text>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='pqr-2'>
                            <div className='bath'>
                                <text>Bathroom</text>
                                </div>
                                <div className='efg'>
                                <div className='img-2'>
                                    <img src={Image2} alt='#' className='ghi'></img>
                                </div>
                                <div className='xyz'>
                                    <div className='text-6'>
                                    <text>2 room</text>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='text-2'>
                            <div className='cost'>
                            <div className='sign'>
                            <img src={Image3} alt='#' className='def'></img>
                            </div>
                            <div className='rupee'>
                                <div className='www'>
                                <text>67.35 L - 1.6 Cr</text>
                                </div>
                            </div>
                            </div>
                            <div className='contact'>
                            <div className='text-7'>
                                <text>Contact</text>
                            </div>
                            </div>
                        </div>
                        </div> */}
                        </div>
                  </div>
                ))}
            </Slider>
            </div>
  )
}

export default ongoing;
