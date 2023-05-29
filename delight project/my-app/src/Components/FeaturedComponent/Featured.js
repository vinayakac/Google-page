import React from 'react'
import './Featured.css'
import Featured1 from '../FeaturedComponent/images/image-1.png'
import Featured2 from '../FeaturedComponent/images/image-2.png'
import Featured3 from '../FeaturedComponent/images/image-3.png'
import Featured4 from '../FeaturedComponent/images/image-4.png'
import Featured5 from '../FeaturedComponent/images/image-5.png'
import Featured6 from '../FeaturedComponent/images/image-6.png'

const Featured = () => {
  return (
    <div className='featured-container'> 
      <div className='featured-header'>

        <div className='featured-heading'>
          <span className='featured-heading-text'>Featured Collection</span>
        </div>

        <div className='featured-subheading'>
          <span className='featured-subheading-text'>Handpicked projects for you</span>
        </div>

      </div>

      <div className='featured-image-container'>

        <div className='featured-row-section-1'>

          <div className='featured-column-1'>
            <img src={Featured1} alt='' className='featured-image-1'></img>
          </div>

          <div className='featured-column-2'>
            <img src={Featured2} alt='' className='featured-image-2'></img>
          </div>

          <div className='featured-column-3'>
          <img src={Featured3} alt='' className='featured-image-3'></img>
          </div>

        </div>

        <div className='featured-row-section-2'>

        <div className='featured-column-4'>
          <img src={Featured4} alt='' className='featured-image-4'></img>
        </div>

        <div className='featured-column-5'>
          <img src={Featured5} alt='' className='featured-image-5'></img>
        </div>

        <div className='featured-column-6'>
          <img src={Featured6} alt='' className='featured-image-6'></img>
        </div>

        </div>

      </div>

      
    </div>
  )
}

export default Featured
