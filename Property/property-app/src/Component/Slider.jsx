import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import Picture1 from '../Assests/Picture1.png';
import Flower from '../Assests/flower.png';




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                {/* <div style={{ border: "1px solid red", height: 200 }}> */}
                <Slider {...settings}>

                    <div className="award-img">
                        <div className="award-image2">
                            <img src={Flower} alt="Flower" className="award-flower1" />
                            <div className="award-image3">
                                <img src={Picture1} alt="#" className="award-picture1" />
                            </div>
                        </div>
                        <section className="award-details">
                            <div clasName="award-details-heading">
                                Farm Land Daksha Chandana
                            </div>

                            <div className="award-subdetails">   
                                 Those days are now passé when purchasing a home used to be a very arduous task...
                            </div>
                        </section>
                    </div>
                    <div>

                    </div>



                    <div>

                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
            // </div>
        );
    }
}