import React from 'react'
import "./Body.css"
import Name from './Name'
import Employee from './Employee.js'
import Email from './Email'
import Address from './Address'
import Address2 from './Address2'
import City from './City'
import Code from './Code'



const Body = () => {
    return (
        <div className='Body-container'>
            <div>
                <Name></Name>
            </div>
            <div>
                <Employee></Employee>
            </div>
            <div>
                <Email></Email>
            </div>
            <div>
                <Address></Address>
            </div>
            <div>
                <Address2></Address2>
            </div>
            <div>
                <City></City>
            </div>
            <div>
                <Code></Code>
            </div>
        </div>
    )
}

export default Body;