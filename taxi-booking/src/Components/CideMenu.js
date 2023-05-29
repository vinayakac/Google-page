import React, { useState } from 'react';
import { Button, Avatar, Menu } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  HistoryOutlined,
  BellOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import './SideMenu.css';

// const { SubMenu } = Menu;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('User1', 'UwU', (
    <Avatar style={{ backgroundColor: '#ffffff' }} icon={<UserOutlined />} />
  )),
  getItem('Home', '2', <HomeOutlined />),
  getItem('History', '3', <HistoryOutlined />),
  getItem('Notifications', '4', <BellOutlined />),
  getItem('Privacy policy', '5', <ReconciliationOutlined />),
  getItem('Settings', '6', <SettingOutlined />),
  getItem('Logout', '7', <PoweroffOutlined />),
];

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleCollapsed = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonClick = () => {
    setShowMenu(false);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Button
        className="SideMenu-Hamburger-Button"
        type="primary"
        onClick={toggleCollapsed}
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: 15,
          marginTop: 10,
          marginLeft: -170,
        }}
      >
        {showMenu ? <MenuOutlined /> : <MenuOutlined />}
      </Button>
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
            width: 256,
          }}
        >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="light"
            inlineCollapsed={false}
          >
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
            <Button
              className="SideMenu-Close-Button"
              type="text"
              onClick={handleButtonClick}
              style={{ position: 'absolute', top: 10, right: 10, zIndex: 4 }}
            >
              Close
            </Button>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
