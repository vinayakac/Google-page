import "./Navigation.css" ;
import  { Col, Row} from 'antd';
import SideMenu from './SideMenu';


export default function NavBar(){
    return(
        <>
            <div className="Navigation">
                    <Row>
            <Col className="Navigtion-side-menu" span={8}><SideMenu/></Col>
            <Col className="Navigation-profile-button" span={8} offset={8}>
                Profile pic
            </Col>
            </Row>
                <div className="Side_Menu-button">
                
                
                </div>

                <div className="Profile-button">
                   
                </div>
            </div>
        </>
    );
}



