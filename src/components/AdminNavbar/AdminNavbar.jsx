import {
  HomeOutlined,
  SettingOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Menu, Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import englandIcon from '../../../src/assets/images/englandIcon.jpg';
import vietnamIcon from '../../assets/images/vietnamIcon.png';

const AdminNavbar = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const url = pathname.slice(1);

  const handleActiveItem = (value) => {
    switch (value) {
      case 'invoices':
        window.localStorage.setItem('activeSidebar', '2');
        break;
      case 'setting':
        window.localStorage.setItem('activeSidebar', '3');
        break;
      default:
        window.localStorage.setItem('activeSidebar', '1');
        break;
    }
  };

  handleActiveItem(url);

  const activeItem = window.localStorage.getItem('activeSidebar');
  const languageOptions = [
    {
      key: 'en',
      value: 'en',
      label: (
        <div>
          <img src={englandIcon} alt="" style={{ width: '25px' }} />
        </div>
      ),
    },
    {
      key: 'vi',
      value: 'vi',
      label: (
        <div>
          <img src={vietnamIcon} alt="" style={{ width: '25px' }} />
        </div>
      ),
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[activeItem.toString()]}
    >
      <Menu.Item key={'1'} icon={<HomeOutlined />}>
        <NavLink to="/">{t('admin.product.products')}</NavLink>
      </Menu.Item>
      <Menu.Item key={'2'} icon={<TableOutlined />}>
        <NavLink to="invoices">{t('admin.product.invoices')}</NavLink>
      </Menu.Item>
      <Menu.Item key={'3'} icon={<SettingOutlined />}>
        {/* <NavLink to="setting">Setting</NavLink> */}
        <Select
          defaultValue={languageOptions[0]}
          options={languageOptions}
          onChange={changeLanguage}
        />
      </Menu.Item>
    </Menu>
  );
};

export default AdminNavbar;
