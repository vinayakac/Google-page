import React from "react";
import './Book.css';

import { Input } from 'antd';

import { Space, TimePicker } from 'antd';

import { DatePicker } from 'antd';
const onChange = (time, timeString, date, dateString) => {
    console.log(time, timeString)(date, dateString);
};


export default function Booking() {
    return (
        <div className="Book-head">
            <div className="Head-1"></div>




            <div className="body-1">
                <div className="body-2">
                    <Input placeholder="Enter Pickup point"/><div className='p1'><img className='icon-1' src={require('./Images/OIP.jpg')} alt=""></img></div>
                    <Input placeholder="Enter Destintaion" />  
                    
                    {/* <div className='p3'><img className='icon-3' src={require('./Images/OIP3.jpg')} alt=""></img></div>  */}
                     <div className='p2'><img className='icon-2' src={require('./Images/oip1.jpg')} alt=""></img></div> 
                    <Space wrap>
                        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                    </Space>

                    <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                    </Space>
                </div>
                <div className='project'>
                    {/* <div className='p1'><img className='icon-1' src={require('./Images/OIP.jpg')} alt=""></img></div> */}
                {/* <div className="body-3">

                </div> */}
            </div>
            </div>



        </div>
    );
}