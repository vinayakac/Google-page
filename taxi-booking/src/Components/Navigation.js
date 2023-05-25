// import {MenuOutlined,UserOutlined} from'antd';
export default function NavBar(){
    return(
        <>
            <div className="">
                <div className="Side_Menu-button">
                
                <MenuOutlined />
                </div>

                <div className="Profile-button">
                    <UserOutlined />
                </div>
            </div>
        </>
    );
}