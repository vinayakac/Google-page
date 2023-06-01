import React from 'react'
import './register.css';

const Register = () => {
  return (
    <div>
      <div className='form'>
        <div className='text'>
            {/* <input className='text1'>Welcome to the Autoservice</input> */}
            {/* <input className='text2'>Let's get your all set up,</input>
            <input className='text3'>so you can being tomake your first order</input> */}
        </div>

        <div className='name'>
            First Name
        <input type="text" placeholder='First Name'className='name1'/>
        </div>

        <div className='name-1'>
            Last Name
        <input type="text" placeholder='Last Name'className='name2'/>
        </div>

        <div className='email'>
            Email
        <input type="text" placeholder='Email'className='email1'/>
        </div>

        {/* <div className='country'>
            Country
        <input type="text" placeholder='Country'className='country1'/>
        </div> */}

        <div className='state'>
            State
        <input type="text" placeholder='State'className='state1'/>
        </div>

        <div className='password'>
            Password
        <input type="text" placeholder='Last Name'className='password1'/>
        </div>

        <div className='confirm-password'>
            C Password
        <input type="text" placeholder='confirm Password'className='confirm'/>
        </div>

        <div className='submit'>
            <button className='sub'>Submit</button>
        </div>


      </div>
    </div>
  )
}

export default Register
