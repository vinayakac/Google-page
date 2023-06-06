
import './App.css';
// import Forgot from '../src/components/ForgotpwdComponents/Password'
import Otppage from '../src/components/OTPComponents/Otppage';
import Register from './components/RegisterComponents/Register';
import Loginexample from './components/LoginComponents/Loginexample';
// import LoginPage from './components/LoginComponents/Login1';
import Password from './components/ForgotpwdComponents/Password';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <Forgot></Forgot> */}
      {/* <Otppage/> */}
      {/* <Register/> */}
      {/* <Loginexample/> */}
      {/* <LoginPage/> */}
      <Routes>
      <Route path='/forgot-password-page' element={<Password/>}/>
        <Route path='/otp-page' element={<Otppage/>}/>
        <Route path='/registration-page' element={<Register/>}/>
        <Route path='/login-page' element={<Loginexample/>}/>
        </Routes>
      {/* <Password/> */}
    </div>
  );
}

export default App;
