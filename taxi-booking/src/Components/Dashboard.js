// import { Card, Space} from "antd";
import { Button, Space } from 'antd';

import NavBar from "./Navigation";
import "./Dashboard.css";



export function MainComponent(){
    return(
        <>
        <div className="Main-Component-CardSet">
            <div className="CardSet-1">
                <Space direction="vertical" size={16}>
                    {/* <Card 
                    title="small card" 
                    size="extra small"
                    extra={a href="/">Learn More</a>}
                    className="Auto-Booking-Card-Dashboard"
                    style={{width:200}}>
                    
                    <a className="Auto-Booking-Button" href="/">Auto Booking</a></Card> */}
                    <Button className="Auto-Booking-Card-Dashboard" block>Auto-Booking-Button</Button>
                    </Space>
            </div>
            <div className="CardSet-2">
                <Space direction="vertical" size={16}>
                    {/* <Card 
                    title="Small card"
                    size="extra small"
                    extra={<a href="/">Learn More</a>}
                    className="AutoStand-NearMe-Dashboard"
                    style={{width:200}}>
                        <a className="Autostand-Button" href="/">Autostands Near Me</a></Card> */}

                        <Button 
                        className="AutoStand-NearMe-Dashboard"
                        block>Autostand-Button</Button>
                    </Space>
           
           </div>
        </div>
        
        </>
    );
}


export default function DashboardComponents(){
    return(
        <>
        <NavBar/>
        <MainComponent/>

        </>
    );

}