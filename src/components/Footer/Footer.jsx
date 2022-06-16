import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TagOutlined,
  TwitterOutlined,
  YoutubeFilled,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

import ButtonOfPage from '../Button/ButtonOfPage';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__content">
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">Shop</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Products Return</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">Infomation</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>Pagination</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Accessories</li>
              <li>Term of use</li>
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">About</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>Help Center</li>
              <li>Address Store</li>
              <li>Privacy Policy</li>
              <li>Receivers & Amplifiers</li>
              {/* <li>Wholesale Policy</li> */}
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">Follow Us</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>
                <Space>
                  <PhoneOutlined /> (646) 663 - 4575
                </Space>
              </li>
              <li>
                <Space>
                  <MailOutlined />
                  help@shopilaunch.com
                </Space>
              </li>
              <li>
                {' '}
                <Space>
                  <TagOutlined />
                  1201 Broadway Suite 600
                </Space>
              </li>
            </ul>
            <div className="footer-container__content__icons">
              <div className="container__content__icon">
                <TwitterOutlined style={{ fontSize: '16px' }} />
              </div>
              <div className="container__content__icon">
                <InstagramFilled style={{ fontSize: '16px' }} />
              </div>
              <div className="container__content__icon">
                <FacebookFilled style={{ fontSize: '16px' }} />
              </div>
              <div className="container__content__icon">
                <YoutubeFilled style={{ fontSize: '16px' }} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-container__content__item"
          style={{ flex: '1.5' }}
        >
          <div className="footer-container__content__item__title">
            <h2 className="title">Newsletters</h2>
          </div>
          <div className="footer-container__content__item__content">
            <p className="footer-container__content__item__introduction">
              Be the first who learns about our great promotions!
            </p>
            <div className="footer-sumbit-mail">
              <div className="footer-sumbit-mail__inputfield">
                <input
                  type="text"
                  name="inputfiled"
                  id=""
                  placeholder="Enter your email..."
                />
              </div>
              <ButtonOfPage label="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container__logo">
        <img
          src="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/logo.png?v=1589452027"
          className="Footer__logo"
        />
        <div className="footer_payment">
          <img
            src="https://cdn.shopify.com/s/files/1/0277/0472/1542/files/pay_copyright.png?v=1589438141"
            alt=""
          />
        </div>
        <div className="copyright">
          <p>© Copyright 2020 | SandpadStore By ShopiLaunch.</p>
        </div>
      </div>
    </div>
  );
}
