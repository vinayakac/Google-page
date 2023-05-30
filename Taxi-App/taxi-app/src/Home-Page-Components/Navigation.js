import "./Navigation.css" ;
import  { Col, Row, Space, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideMenu from './SideMenu2';
// import ProfileComponent from './Dashboard';

export function ProfileComponent(){
    return(
    

            <div className="Profile pic-button">
                <Space direction="vertical" size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Space>
            </div>
           
            
            
    );

}


export default function NavBar(){
    return(
        <>
            <div className="Navigation">
                    <Row>
            <Col className="Navigtion-side-menu" span={8}><SideMenu/></Col></Row>
            <Row>
            <Col className="Navigation-profile-button" span={8} offset={8}>
                <ProfileComponent/>
            </Col>
            </Row>
            
            </div>
        </>
    );
}



