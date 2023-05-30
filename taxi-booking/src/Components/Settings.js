import {  ArrowLeftOutlined, } from '@ant-design/icons';
import { Button } from 'antd';
import './Settings.css';



export default function SettingPage(){
    return(
        <>
        <div className="Settings-Section">
            <div className="Settings-Section-Top-Layout">
                <div className='Settings-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div>
                <div className='Settings-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-Title'>
                        <h2> Settings</h2>
                    </div>
                </div>
            </div>
            <div className='Settings-Section-Body-Layout'>
                <div className='Setting-Section-Option-Lists'>
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Profile</ul>
                            <ul>somethingstupid@gmail.com</ul>
                        </Button>
                      <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Notification</ul>
                        </Button>
                      <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Language</ul>
                            
                        </Button>
                     <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Privacy Policy</ul>
                        </Button>
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Terms and Conditions</ul>
                        </Button>
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>About Us </ul>
                        </Button>
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Contact Us</ul>
                        </Button>
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Log Out</ul>
                        </Button>
                </div>
            </div>


        
        </div>
        </>
    );
}