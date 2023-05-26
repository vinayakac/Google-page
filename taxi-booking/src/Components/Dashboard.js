import { Button, Dropdown } from "antd";
import NavBar from "./Navigation";

export function ProfileComponent(){
    return(
        <>
        <div>
            <div className="Profile pic-button"></div>
            {/* After clicking the profile the drop down must appear */}
            <Dropdown></Dropdown>
            </div></>
    );

}

export function MainComponent(){
    return(
        <>
        <div>
            <Button placeholder="Book For an Auto">

            </Button>
        </div>
        <div>
            <Button placeholder="Search for an Auto Stand"></Button>
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