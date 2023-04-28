// import React from "react";
// import "./style.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

export default function Sliding(){

    let data =[{
        // src: "./images/img2.png",
        name : "a",
        price : 20,
        description: "Lorem ipsum"
 
   },
   {
     name : "a2",
     price : 30,
     description: "Lorem jipsum"
 },
 {
   name : "a3",
   price : 40,
   description: "Lorem jumpsum"
 }
 ,
 {
   name : "a3",
   price : 40,
   description: "Lorem jumpsum"
 }


 ]
    return(
        <div className="Slider">

    <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        // autoplaySpeed={3000}
      >

        {data.map((card, index) => (
          <div key={index}> 
          <h2>{card.name}</h2>
          <h2>{card.price}</h2>
          <p>{card.description}</p>
          <button className='btn'>More info</button>
          </div>))}
        
        
      </Slider>

      {/* <Slider
      dots={false}
      slidesToShow={4}
      slidesToScroll={2}
      autoplay={false}>
        {renderNames()}
      </Slider> */}

        </div>
    );
}