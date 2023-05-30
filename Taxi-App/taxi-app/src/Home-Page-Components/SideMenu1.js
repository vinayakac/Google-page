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
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem('User1', 'UwU', (
    <Avatar style={{ backgroundColor: '#ffffff' }} icon={<UserOutlined />} />
  ), null, './Settings.js'),
  getItem('Home', '2', <HomeOutlined />, null, './Profilesection'),
  getItem('History', '3', <HistoryOutlined />, null, './Settings.js'),
  getItem('Notifications', '4', <BellOutlined />, null, './Settings.js'),
  getItem('Privacy policy', '5', <ReconciliationOutlined />, null, './Profilesection.js'),
  getItem('Settings', '6', <SettingOutlined />, null, './Profilesection.js'),
  getItem('Logout', '7', <PoweroffOutlined />, null, './Settings.js'),
  getItem('Close', '8', <span>Close</span>),
];

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleCollapsed = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Button
        className="SideMenu-Hamburger-Button"
        type="text"
        onClick={toggleCollapsed}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          margin: '10px 0 0 -1px',
          borderLeft: '1px solid #e8e8e8',
          backgroundColor: 'transparent',
        }}
      >
        {showMenu && <MenuOutlined />}
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
            onClick={handleMenuClick}
          >
            {items.map((item, index) => {
              if (index === 0) {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                );
              }
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
