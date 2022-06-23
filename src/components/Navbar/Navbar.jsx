import {
  CloseOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Badge, Select } from 'antd';
import { sum } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import englandIcon from '../../../src/assets/images/englandIcon.jpg';
import vietnamIcon from '../../assets/images/vietnamIcon.png';
import ButtonOfPage from '../Button/ButtonOfPage';
import ProductCart from '../ProductCart/ProductCart';
import CartField from './CartField';
import './Navbar.scss';
import SearchField from './SearchFIeld';

export default function Navbar() {
  const [onActive, SetOnActive] = useState(false);
  const [onActiveNavbar, setOnActiveNavbar] = useState(true);
  const [onCartActive, setOnCartActive] = useState(false);
  const [onSearchActive, setOnSearchActive] = useState(false);

  const { t, i18n } = useTranslation();
  const cartItem = useSelector((state) => state.product.cart);
  let navigate = useNavigate();
  const navbar = useRef();
  window.onscroll = () => {
    if (document.documentElement.scrollTop < 100) {
      setOnActiveNavbar(true);
    } else {
      setOnActiveNavbar(false);
    }
  };

  const languageOptions = [
    {
      key: 'en',
      value: 'en',
      label: (
        <div>
          <img src={englandIcon} alt="" style={{ width: '20px' }} />
        </div>
      ),
    },
    {
      key: 'vi',
      value: 'vi',
      label: (
        <div>
          <img src={vietnamIcon} alt="" style={{ width: '20px' }} />
        </div>
      ),
    },
  ];

  const defaultLanguage = window.localStorage.getItem('lng');

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <header>
      <nav
        className={onActiveNavbar ? 'navbar' : 'navbar postionfixed'}
        ref={navbar}
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/logo.png?v=1589452027"
          className="navbar__logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <ul className="navbar__links">
          <li className="navbar__link">
            <NavLink to="/">{t('cta.home')}</NavLink>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">{t('cta.home')}</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <Badge.Ribbon text="hot" color="red" size="12px">
            <li className="navbar__link">
              <NavLink to="/Shop">{t('cta.shop')}</NavLink>

              <div className="navbar__dropdown">
                <div
                  className="navbar__dropdown__content"
                  style={{ width: '700px' }}
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
                    style={{ width: ' 100%' }}
                    src="https://player.vimeo.com/video/348288278?background=1&quality=1080p&loop=1"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </li>
          </Badge.Ribbon>
          <li className="navbar__link">
            <NavLink to="/collection">{t('cta.collection')}</NavLink>
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
              setOnSearchActive(!onSearchActive);
            }}
            style={{ cursor: 'pointer' }}
          >
            <SearchOutlined style={{ fontSize: 24 }} />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              SetOnActive(!onActive);
              setOnCartActive(!onSearchActive);
            }}
          >
            <Badge count={cartItem.length}>
              <ShoppingOutlined style={{ fontSize: 24 }} />
            </Badge>
          </div>
          <div>
            <Select
              defaultValue={defaultLanguage}
              options={languageOptions}
              onChange={changeLanguage}
            />
          </div>
        </div>
      </nav>
      <div
        className="search-field"
        style={{
          visibility: onSearchActive ? 'visible' : 'hidden',
          opacity: onSearchActive ? '1' : '0',
          height: onSearchActive ? '400px ' : '0',
          zIndex: onSearchActive ? '101' : '0',
          position: onSearchActive ? 'fixed' : 'relative',
        }}
      >
        <h1>Start typing and hit Enter</h1>
        <div className="search-field__inputContent">
          <input
            className="search-field__inputContent__input"
            placeholder="Search anything"
          />
          <SearchOutlined style={{ fontSize: '18px' }} />
        </div>
        <div className="search-field__closeModal">
          <CloseOutlined
            style={{ fontSize: '18px' }}
            onClick={() => {
              SetOnActive(!onActive);
              setOnSearchActive(!onSearchActive);
            }}
          />
        </div>
      </div>
      <div
        className="cart_field"
        style={{
          opacity: onCartActive ? '1' : '0',
          visibility: onCartActive ? 'visible' : 'hidden',
          zIndex: onCartActive ? '101' : '-1',
          width: onCartActive ? '350px' : '0',
        }}
      >
        <div className="cart_field__header">
          <div className="cart_field__header__icon">
            {' '}
            <CloseOutlined
              style={{ fontSize: '18px' }}
              onClick={() => {
                setOnCartActive(false);
                SetOnActive(!onActive);
              }}
            />
          </div>
          <div className="cart_field__header__content">
            <p>{t('checkout.your_cart')}</p>
          </div>
          <div className="cart_field__header__total">
            <p className="cart_field__header__total__value">
              {cartItem.length}
            </p>
          </div>
        </div>
        <div
          className="cart_field__body"
          style={{ justifyContent: cartItem.length ? 'flex-start' : 'center' }}
        >
          {cartItem.length === 0 ? (
            <>
              <div className="cart_field__body__title">
                <h3>{t('checkout.empty')}</h3>
              </div>
              <button
                className="cart_field__body__btn"
                onClick={() => {
                  navigate('/Collection');
                  setOnCartActive(false);
                  SetOnActive(false);
                }}
              >
                {t('checkout.shop_now')}
              </button>
            </>
          ) : (
            <div className="cart_field__body__product">
              {cartItem.map((item, index) => {
                return (
                  <ProductCart
                    key={index}
                    index={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    color={item.color}
                    size={item.size}
                    quantity={item.quantity}
                    price={item.price}
                  />
                );
              })}
            </div>
          )}
        </div>
        {cartItem.length !== 0 && (
          <div className="cart_field__footer">
            <div className="cart_field__footer__total">
              <div>{t('checkout.total')}</div>
              <div>
                {t('checkout.price_formatted', {
                  val: sum(cartItem.map((item) => item.price * item.quantity)),
                })}
              </div>
            </div>
            <div className="cart_field__footer__button">
              <ButtonOfPage path="checkout" label={t('checkout.checkout')} />
            </div>
          </div>
        )}
      </div>
      <div
        className="bg_search_box"
        style={{
          visibility: onActive ? 'visible' : 'hidden',
          opacity: onActive ? '1' : '0',
          zIndex: onActive ? '100' : '0',
        }}
        onClick={() => {
          SetOnActive(false);
          setOnCartActive(false);
          setOnSearchActive(false);
        }}
      ></div>
    </header>
  );
}
