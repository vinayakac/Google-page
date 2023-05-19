
import Slider from 'react-slick';
import './Nested.css'

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
const Nested =
    ({ images }) => {
        return <div className="trending_nested_slider">

            <Slider {...settings}>
            {(images || []).map(d => <div className='nested_images'>
                <img src={d} alt=" " /></div>)}
            </Slider>

        </div>
    }

export default Nested