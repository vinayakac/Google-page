import { Button } from "antd";
import {  ArrowLeftOutlined, } from '@ant-design/icons';
import './Notification.css';


export default function NotificationSection(){
    return(
        <>
            <div className="Notification-Section">
            <div className="Notification-Section-Top-Layout">
                <div className='Notification-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined/>
                </div>
                <div className='Notification-Section-Top-Layout-Subsection'>
                    <div className='Notification-Top-Layout-Subsection-Title'>
                        <h2>Notification</h2>
                    </div>
                </div>
            </div>
                <div className="Notification-Section-Body-Layout">
                    <div className="Notification-Section--Body-Date">
                        <span>25 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                        <Button >Msg1</Button>
                        <Button >Msg2</Button>
                        <Button >Msg3</Button>
                        <Button >Msg4</Button>
                    </div>

                    <div className="Notification-Section--Body-Date">
                        <span>24 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                        <Button >Msg1</Button>
                        <Button >Msg2</Button>
                        <Button >Msg3</Button>
                        <Button >Msg4</Button>
                    </div>
                    


                </div>
            </div>
        </>
    );
}