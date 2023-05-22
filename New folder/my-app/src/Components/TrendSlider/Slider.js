
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'


// const CustomPrevArrow = ({ onClick }) => (
//     <button className="custom-prev-arrow" onClick={onClick}>
//       Previous
//     </button>
//   );
//   const CustomNextArrow = ({ onClick }) => (
//     <button className="custom-next-arrow" onClick={onClick}>
//       Next
//     </button>
//   );
  
  const imageSettings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
// const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// };
const Nested =
    ({ images }) => {
        return <div className="trending_nested_slider">

            <Slider {...imageSettings}>
            {(images || []).map(d => <div className='nested_images'>
                <img src={d} alt=" " /></div>)}
            </Slider>

        </div>
    }

export default Nested