import { Card, Space} from "antd";

import NavBar from "./Navigation";
import "./Dashboard.css";



export function MainComponent(){
    return(
        <>
        <div className="Main-Component-CardSet">
            <div className="CardSet-1">
                <Space direction="vertical" size={16}>
                    <Card 
                    // title="small card" 
                    size="extra small"
                    // extra={a href="/">Learn More</a>}
                    className="Auto-Booking-Card-Dashboard"
                    style={{width:200}}>
                    
                    <a className="Auto-Booking-Button" href="/">Auto Booking</a></Card>
                    </Space>
            </div>
            <div className="CardSet-2">
                <Space direction="vertical" size={16}>
                    <Card 
                    // title="Small card"
                    size="extra small"
                    // extra={<a href="/">Learn More</a>}
                    className="AutoStand-NearMe-Dashboard"
                    style={{width:200}}>
                        <a className="Autostand-Button" href="/">Autostands Near Me</a></Card>
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