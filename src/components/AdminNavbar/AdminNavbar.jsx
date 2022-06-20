import {
  HomeOutlined,
  SettingOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AdminNavbar = () => {
  const { pathname } = useLocation();
  const url = pathname.slice(1);

  const handleActiveItem = (value) => {
    switch (value) {
      case 'pet':
        window.localStorage.setItem('activeSidebar', '2');
        break;
      case 'invoices':
        window.localStorage.setItem('activeSidebar', '3');

        break;
      default:
        window.localStorage.setItem('activeSidebar', '1');
        break;
    }
  };

  handleActiveItem(url);

  const activeItem = window.localStorage.getItem('activeSidebar');

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[activeItem.toString()]}
    >
      <Menu.Item key={'1'} icon={<HomeOutlined />}>
        <NavLink to="/">Products</NavLink>
      </Menu.Item>
      <Menu.Item key={'2'} icon={<TableOutlined />}>
        <NavLink to="invoices">Invoices</NavLink>
      </Menu.Item>
      <Menu.Item key={'3'} icon={<SettingOutlined />}>
        <NavLink to="setting">Setting</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default AdminNavbar;
