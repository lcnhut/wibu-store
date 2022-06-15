import {
  CloseOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  const cartItem = useSelector((state) => state.product.cartItem);
  const [onActive, SetOnActive] = useState(false);
  console.log(onActive);
  return (
    <header>
      <nav className="navbar" style={{ zIndex: onActive ? "0" : "99" }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/logo.png?v=1589452027"
          className="navbar__logo"
        />
        <ul className="navbar__links">
          <li className="navbar__link">
            <NavLink to="/">HOME</NavLink>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">Pagination</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <Badge.Ribbon text="hot" color="red" size="12px">
            <li className="navbar__link">
              <NavLink to="/Shop">SHOP</NavLink>

              <div className="navbar__dropdown">
                <div
                  className="navbar__dropdown__content"
                  style={{ width: "700px" }}
                >
                  <div className="navbar__dropdown__lists">
                    <div className="title">SHOP LAYOUTS</div>
                    <ul className="list__dropdown__items">
                      <li className="list__dropdown__item">Pagination</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                    </ul>
                  </div>
                  <div className="navbar__dropdown__lists">
                    <div className="title">SHOP LAYOUTS</div>
                    <ul className="list__dropdown__items">
                      <li className="list__dropdown__item">Pagination</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                      <li className="list__dropdown__item">Thang </li>
                    </ul>
                  </div>
                  <div className="navbar__dropdown__lists">
                    <div className="title">SHOP LAYOUTS</div>
                    <ul className="list__dropdown__items">
                      <li className="list__dropdown__item">Pagination</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                      <li className="list__dropdown__item">Ajax Load More</li>
                    </ul>
                  </div>
                </div>
                <div className="navbar__video">
                  <iframe
                    style={{ width: " 100%" }}
                    src="https://player.vimeo.com/video/348288278?background=1&quality=1080p&loop=1"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </li>
          </Badge.Ribbon>
          <li className="navbar__link">
            <NavLink to="/Collection"> Collection </NavLink>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">Pagination</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLink to="/Pages"> PAGES</NavLink>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">Pagination</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLink to="/admin"> Admin</NavLink>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">Pagination</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="navbar__icon">
          <div>
            <UserOutlined style={{ fontSize: 24 }} />
          </div>
          <div>
            <HeartOutlined style={{ fontSize: 24 }} />
          </div>
          <div
            onClick={() => {
              SetOnActive(!onActive);
            }}
            style={{ cursor: "pointer" }}
          >
            <SearchOutlined style={{ fontSize: 24 }} />
          </div>
          <div style={{ cursor: "pointer" }}>
            <Badge count={cartItem.length}>
              <ShoppingOutlined style={{ fontSize: 24 }} />
            </Badge>
          </div>
        </div>
      </nav>
      <div
        className="search-field"
        style={{
          visibility: onActive ? "visible" : "hidden",
          opacity: onActive ? "1" : "0",
          height: onActive ? "400px " : "0",
          zIndex: onActive ? "101" : "0",
        }}
      >
        <h1>Start typing and hit Enter</h1>
        <div className="search-field__inputContent">
          <input
            className="search-field__inputContent__input"
            placeholder="Search anything"
          />
          <SearchOutlined style={{ fontSize: "18px" }} />
        </div>
        <div className="search-field__closeModal">
          <CloseOutlined
            style={{ fontSize: "18px" }}
            onClick={() => {
              console.log("hello");
              SetOnActive(!onActive);
            }}
          />
        </div>
      </div>
      <div
        className="bg_search_box"
        style={{
          visibility: onActive ? "visible" : "hidden",
          opacity: onActive ? "1" : "0",
          zIndex: onActive ? "100" : "0",
        }}
        onClick={() => {
          SetOnActive(!onActive);
        }}
      ></div>
    </header>
  );
}
