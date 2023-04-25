import React from 'react';
import "./Body.css"



const Body = () => {
    return( 
        <div className='body'>
            <div className="grid-container">
                <div className="grid-item1">
                    <div className='biriyani'>
                    <img className="body1" src={require('./images/biriyani.jpeg')} alt=""/>
                    <text className='text-b1'>Chicken Biriyani</text>
                    <text className='text-c1'>₹200</text>
                    <img className="fev1" src={require('./images/menu.png')} alt=""/>
        
                    </div>
                </div>
                <div className="grid-item2">
                    <div className='egg'>
                    <img className="body2" src={require('./images/egg masala.jpg')} alt=""/>
                    <text className='text-b2'>Egg Masala</text>
                    <text className='text-c2'>₹130</text>
                    <img className="fev2" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>
                <div className="grid-item3">
                    <div className='paneer'>
                    <img className="body3" src={require('./images/paneer_masala.jpg')} alt=""/>
                    <text className='text-b3'>Paneer Masala</text>
                    <text className='text-c3'>₹150</text>
                    <img className="fev3" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>  
                <div className="grid-item4">
                    <div className='kabab'>
                    <img className="body4" src={require('./images/chicken_kabab.jpg')} alt=""/>
                    <text className='text-b4'>Chicken Kabab</text>
                    <text className='text-c4'>₹100</text>
                    <img className="fev4" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>
                <div className="grid-item5">
                    <div className='fried'>
                    <img className="body5" src={require('./images/Egg-fride.jpg')} alt=""/>
                    <text className='text-b5'>Egg Fried Rise</text>
                    <text className='text-c5'>₹180</text>
                    <img className="fev5" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>
                <div className="grid-item6">
                    <div className='fish'>
                    <img className="body6" src={require('./images/fish-meals.jpg')} alt=""/>
                    <text className='text-b6'>Fish Meal</text>
                    <text className='text-c6'>₹150</text>
                    <img className="fev6" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>  
                <div className="grid-item7">
                    <div className='veg'>
                    <img className="body7" src={require('./images/veg-meal.jpg')} alt=""/>
                    <text className='text-b7'>Veg Meal</text>
                    <text className='text-c7'>₹100</text>
                    <img className="fev7" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>  
                <div className="grid-item8">
                    <div className='veg-b'>
                    <img className="body8" src={require('./images/veg-biryani.jpeg')} alt=""/>
                    <text className='text-b8'>Veg Biriyani</text>
                    <text className='text-c8'>₹160</text>
                    <img className="fev8" src={require('./images/menu.png')} alt=""/>
                    </div>
                </div>  
                 
                 
</div>
            
            
        </div>
        );
}



export default Body;