import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Avatar , Button } from 'antd';
import './Profilesection.css';



export default function ProfilePage(){
    return(
        <>
        <div className="Profile-Section">
            <div className="Profile-Section-Top-Layout">
                <div className='Profile-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div>
                <div className='Profile-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-UserName'>
                        <h2> User Name</h2>
                    </div>
                    <div className='Top-Layout-Subsection-UserImage'>
                        <Avatar size="large" icon={<UserOutlined style={{fontSize: '44px', color: '#ffffff'}}/>} />
                    </div> 
                </div>
            </div>
            <div className='Profile-Section-Body-Layout'>
                <div className='Profile-Section-Option-Lists'>
                    
                        <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Email</ul>
                            <ul>somethingstupid@gmail.com</ul>
                        </Button>
                      <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Phone number</ul>
                            <ul>+91 94838492832</ul>
                        </Button>
                      <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Gender</ul>
                            <ul>Female</ul>
                        </Button>
                     <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Dob</ul>
                            <ul>12 May 2004</ul>
                        </Button>
                    
                    <div className="Profile-Section-Option-Lists-Subsection">
                        <ul>Emergency Contact</ul>
                        <ul>Contact 1</ul>
                        <ul>Contact 2</ul>
                    </div>
                    
                </div>
                <div className="Profile-Section-Option-Lists-Footersection">
                        <ul>Members Since </ul>
                        <ul>1st May 2023</ul>
                    </div>
            </div>


        
        </div>
        </>
    );
}