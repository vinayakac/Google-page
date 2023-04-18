import React from 'react';
import "../components/Login.css"
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'

export default function login(){
    return(
    <div className="page-container">
        <div className="login-container">
                <Header />
                <Body />
                <Footer />

           
        </div>

    </div>
    );
}



// export default Login;