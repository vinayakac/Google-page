import { useState } from 'react';
import { Avatar, Button, Menu } from 'antd';
import { 
  MenuOutlined ,
  UserOutlined,
  
  HomeOutlined,
  HistoryOutlined,
  BellOutlined,
  AppstoreOutlined,
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

const items = [
  getItem('User1', 'UwU', <Avatar  style={{backgroundColor: '#87d068',}}
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
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
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
    <div style={{ width: 256 }}>
      <Button
        className="SideMenu-Hamburger-Button"
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {handleButtonClick ? <MenuOutlined />  : <MenuOutlined />}
      </Button>
      {collapsed ? null : (
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
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