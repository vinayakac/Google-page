import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class ParentSlider extends React.Component {
    render() {
      const settings = {
        // Parent slider settings
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        
        // Child slider settings
        childSliderSettings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      };
  
      return (
        <Slider {...settings}>

          <div>
            <h3>Slide 1</h3>
            <Slider {...settings.childSliderSettings}>
              <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>

          <div>
            <h3>Slide 2</h3>
            <Slider {...settings.childSliderSettings}>
            <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>

          <div>
            <h3>Slide 3</h3>
            <Slider {...settings.childSliderSettings}>
            <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>
          
          <div>
            <h3>Slide 4</h3>
            <Slider {...settings.childSliderSettings}>
            <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>
          
          <div>
            <h3>Slide 5</h3>
            <Slider {...settings.childSliderSettings}>
            <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>
          
          <div>
            <h3>Slide 6</h3>
            <Slider {...settings.childSliderSettings}>
            <div>Child Slide 1</div>
              <div>Child Slide 2</div>
              <div>Child Slide 3</div>
              <div>Child Slide 4</div>
            </Slider>
          </div>

        </Slider>
      );
    }
  }
export default ParentSlider;  