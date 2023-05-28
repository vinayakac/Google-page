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
                <div className='{rofile-Section-Option-Lists'>
                    <div>
                        <ul>Email</ul>
                        <ul>somethingstupid@gmail.com</ul>
                    </div>
                    <div>
                        <ul>Phone number</ul>
                        <ul>+91 94838492832</ul>
                    </div>
                    <div>
                        <ul>Gender</ul>
                        <ul>Female</ul>
                    </div>
                    <div>
                        <ul>Dob</ul>
                        <ul>12 May 2004</ul>
                    </div>
                    <div>
                        <ul>Emergency Contact</ul>
                        <ul>Contact 1</ul>
                        <ul>Contact 2</ul>
                    </div>
                    <div>
                        <ul>Members Since </ul>
                        <ul>1st May 2023</ul>
                    </div>
                </div>
            </div>


        
        </div>
        </>
    );
}