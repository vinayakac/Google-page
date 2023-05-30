import { Button } from "antd";
import {  ArrowLeftOutlined, } from '@ant-design/icons';
import './History.css';


export default function HistorySection(){
    return(
        <>
            <div className="History-Section">
            <div className="History-Section-Top-Layout">
                <div className='History-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined/>
                </div>
                <div className='History-Section-Top-Layout-Subsection'>
                    <div className='History-Top-Layout-Subsection-Title'>
                        <h2>History</h2>
                    </div>
                </div>
            </div>
                <div className="History-Section-Body-Layout">
                    <div className="History-Section--Body-Date">
                        <span>25 May 2023</span>
                    </div>
                    <div className="History-Section-Notification-headings">
                        <Button >Msg1</Button>
                        <Button >Msg2</Button>
                        <Button >Msg3</Button>
                        <Button >Msg4</Button>
                    </div>

                    <div className="History-Section--Body-Date">
                        <span>24 May 2023</span>
                    </div>
                    <div className="History-Section-Notification-headings">
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