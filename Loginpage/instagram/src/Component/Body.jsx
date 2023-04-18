import React from 'react'
import "./Body.css"
import Logo from "./Logo.jsx"
import Input from './Input.jsx'
import OR from './Or.jsx'
import Have from './Have.jsx'
import Fcebook from '../Component/Facebook.jsx'
import Forgot from '../Component/Forgot.jsx'
import App from '../Component/Get.jsx'
// import Footer from '../Component/Footer.jsx'



export default function Body() {
  return (
    <div className='login-container'>
      <div className='box-1'>
        <div className='box-1-logo'>
          <Logo></Logo>
        </div>
        <div>
          <Input></Input>
        </div>
        <div>
          <OR></OR>
        </div>
        <div className='fb-place'>
          <Fcebook></Fcebook>
        </div>
        <div>
          <Forgot></Forgot>
        </div>
      </div>
      <div className='box-2'>
        <Have></Have>
      </div>
      <div>
        <App></App>
      </div>
      {/* <div>
        <Footer></Footer>
      </div> */}
    </div>
  )
}
