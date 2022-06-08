import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/logo.png?v=1589452027"
        className="navbar__logo"
      />
      <ul className="navbar__links">
        <li className="navbar__link">
          <a>HOME</a>
        </li>
        <li className="navbar__link">
          <a>SHOP</a>
        </li>
        <li className="navbar__link">
          <a>FEATURED</a>
        </li>
        <li className="navbar__link">
          <a>PAGES</a>
        </li>
        <li className="navbar__link">
          <a>BLOGS</a>
        </li>
      </ul>
      <div className="navbar__icon">
        <div>
          <UserOutlined style={{ fontSize: 24 }} />
        </div>
        <div>
          <HeartOutlined style={{ fontSize: 24 }} />
        </div>
        <div>
          <SearchOutlined style={{ fontSize: 24 }} />
        </div>
        <div>
          <ShoppingOutlined style={{ fontSize: 24 }} />
        </div>
      </div>
    </nav>
  );
}
