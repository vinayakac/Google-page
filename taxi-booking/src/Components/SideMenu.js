import { useState } from 'react';
import { Avatar, Button, Menu } from 'antd';
import { 
  MenuOutlined ,
  UserOutlined,
  
  HomeOutlined,
  HistoryOutlined,
  BellOutlined,
  ReconciliationOutlined,
  PoweroffOutlined,
  SettingOutlined
  
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// <Avatar
// style={{
//   backgroundColor: '#87d068',
// }}
// icon={<UserOutlined />}
// />
// export function User1 (){
//   return(
//     <>
//     <a href="/"></a>
//     </>
//   );
// }
  


const items = [
  getItem('User1', 'UwU', <Avatar  style={{backgroundColor: '#ffffff',}}
  icon={<UserOutlined />}/>),
  getItem('Home', '2', <HomeOutlined />),
  getItem('History', '3', <HistoryOutlined />),
  getItem('Notifications', '4', <BellOutlined />, ),
  // [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),
  getItem('	Privacy policy', '5', <ReconciliationOutlined />,),
  //  [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
  getItem('Settings', '6', <SettingOutlined />,),
  getItem('Logout', '7', <PoweroffOutlined />,),
  // getItem('Testing', '7', <PoweroffOutlined />,)
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleButtonClick = () => {
    setCollapsed(true);
  };

  return (
    <div  style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 3,
      width: 256 }}>
      <Button
        className="SideMenu-Hamburger-Button"
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 15, marginTop: 10,
        marginLeft:-170 ,position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 3,
        width: 256,}}
    
      >
        {handleButtonClick ? <MenuOutlined />  : <MenuOutlined />}
      </Button>
       <Button
       className="SideMenu-Close-Button"
       type="text"
       onClick={handleButtonClick}
       style={{ position: 'absolute', top: 10, right: 10, zIndex: 4 }}
     >
       Close
     </Button>
      {collapsed ? null : (
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          // mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      )}
    </div>
  );
};

export default SideMenu;


// export default function SideMenus(){
//     return(
//         <>
//         <div className="Side-menu-expanded">
//             <div className="Side-menu-Exit-option"></div>
//             <div className="Side-menu-profile-section">

//             </div>
//             <div className="Side-menu-Notification-section">

//             </div>
//             <div className="Side-menu-History-section">

//             </div>
//             <div className="Side-menu-Settings-section"></div>
//             <div className="Side-menu-Privacypolicy-section"></div>
//             <div className="Side-menu-Logout-option-section">

//             </div>
//             </div></>
//     );
// }