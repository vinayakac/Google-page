import React from 'react'
import './Trending.css'

const Trending = () => {
    return (
        // <div className='trending_page'>

        //     <div className='trending_page_heading'>

        //         <div className='page_heading'>
        //             <span className='trending_heading'>Trending Projects</span>
        //         </div>
                
        //         <div className='page_subheading'></div>

        //     </div>

        //     <div className='trending_page_content'></div>

        // </div>




        <div className='trending_page'>

            <div className='trending_heading'>

                <div className='trending_heading_container'>
                    <span className='trending_text_heading'>Trending Projects</span>
                </div>

                <div className='trending_subheading_container'>
                    <span className='trending_text_subheading'>The Noteworthy Real Estate in India</span>
                </div>

            </div>

            <div className='trending_content'>

                <div className='trending_details'>

                    <div className='trending_page_details_1'>

                        <div className='trending_image_container'>
                            <img className='trending_image_1' src={require('./images/image1.png')} alt=''></img>
                        </div>
                        <div className='trending_image_details_container'></div>
                    </div>

                    <div className='trending_page_details_2'>
                        <div className='trending_image_container'>
                            <img className='trending_image_2' src={require('./images/image2.png')} alt=''></img>
                        </div>
                        <div className='trending_image_details_container1'></div>
                        
                    </div>
                    <div className='trending_page_details_3'>
                    <div className='trending_image_container'>
                            <img className='trending_image_3' src={require('./images/image3.png')} alt=''></img>
                        </div>
                        <div className='trending_image_details_container3'></div>
                    </div>

                </div>

                {/* <div className='trending_carousel'></div> */}

            </div>

        </div>
    )
}
export default Trending