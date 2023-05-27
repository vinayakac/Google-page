import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './Profilesection.css';



export default function ProfilePage(){
    return(
        <>
        <div className="Profile-Section">
            <div className="Profile-Section-Top-Layout">
                <div className='Profile-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined/>
                </div>
                <div className='Profile-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-UserName'>
                        <p> User Name</p>
                    </div>
                    <div className='Top-Layout-Subsection-UserImage'>
                        <UserOutlined/>
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