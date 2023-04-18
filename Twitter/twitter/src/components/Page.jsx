import React from 'react';
import './Page.css';
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx';



export default function Page() {
  return(

  <body>
    <div className='page-container'>

      <div className='login-container'>

        <div>

          <Header></Header>
        </div>

        <div>
          <Body></Body>
        </div>

        <div>
          <Footer></Footer>
        </div>
        
      </div>
      
    </div>

  </body> 

  )
   
   

  

  }