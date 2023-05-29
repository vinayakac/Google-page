import React from 'react'
import './Banner.css'
import Searchlogo from './images/search-icon.png'
import Buildinglogo from './images/image-1.png'
// import Image from './images/image.png'

const Banner = () => {
  return (
    <div className='banner-container'> 

      <div className='banner-text-container'>
        <span className='banner-main-heading'>Discover Properties in India</span>
        <span className='banner-heading'>We help you to find your new home</span>
          
          <div className='banner-colored-text'>
            <span className='find-text'>Find it. </span>
            <span className='tour'>Tour it. </span>
            <span className='own'>Own it.</span>
          </div>

      </div> 

      <div className='banner-searchbar'>

        <div className='banner-searchbar-text'>
          <span className='banner-search-text'>Search by city, location, project, developer</span>
        </div>

        <div className='banner-searchbar-button'>
          <img src={Searchlogo} alt='#' className='search'></img>
          <span className='search-text'>SEARCH</span>
        </div>

      </div>

      <div className='banner-building-image'>
        <img src={Buildinglogo} alt='#' className='building-image'></img>
        {/* <img src={Image} alt='#' className='cimage-1'></img> */}
      </div>

    </div>
  )
}

export default Banner
