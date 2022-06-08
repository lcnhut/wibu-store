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
          <NavLink to="/">HOME</NavLink>
          <div className="navbar__dropdown">
            <div className="">
              <div className="title">SHOP LAYOUTS</div>
              <ul className="list__dropdown__items">
                <li className="list__dropdown__item">Pagination</li>
                <li className="list__dropdown__item">Ajax Load More</li>
                <li className="list__dropdown__item">Ajax Load More</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar__link">
          <NavLink to="/Shop">SHOP</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/Feature"> FEATURE</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/Feature"> PAGES</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/Feature"> BLOGS</NavLink>
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
