import {  ArrowLeftOutlined, } from '@ant-design/icons';
import './Settings.css';



export default function SettingPage(){
    return(
        <>
        <div className="Settings-Section">
            <div className="Settings-Section-Top-Layout">
                <div className='Settings-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined/>
                </div>
                <div className='Settings-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-Title'>
                        <p> Settings</p>
                    </div>
                </div>
            </div>
            <div className='Profile-Section-Body-Layout'>
                <div className=''></div>
            </div>


        
        </div>
        </>
    );
}