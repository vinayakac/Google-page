// eslint-disable-next-line no-unused-vars

import "./git.css"

import Logo from "./Header.jsx"
import App from "./Text.jsx"
import Input from './Body.jsx'
import User from './User.jsx'
import Part2 from './Part2.jsx'


export default function Body() {
    return(
        <div class="page-container">
            
        
        <div>
            <Logo></Logo>
        </div>
        <div>
            <App></App>
        </div>
        <div>
            <Input></Input>
        </div>
        <div>
            <User></User>
        </div>
        <div>
            <Part2></Part2>
        </div>
        
        </div>
    )
}