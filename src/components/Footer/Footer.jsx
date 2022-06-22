import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined,
  TagOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonOfPage from '../Button/ButtonOfPage';
import './Footer.scss';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer-container">
      <div className="footer-container__content">
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">{t('footer.shop')}</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>{t('footer.work_time')}</li>
              <li>{t('footer.privacy_policy')}</li>

              <li>{t('footer.Products_return')}</li>
              <li>{t('footer.wholesale_prolicy')}</li>
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">{t('footer.infomation')}</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>{t('footer.comments')}</li>
              <li>{t('footer.address_store')}</li>
              <li>{t('footer.term_of_user')}</li>
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">{t('footer.About')}</h2>
          </div>
          <div className="footer-container__content__item__content">
            <ul>
              <li>{t('footer.help_center')}</li>

              <li>{t('footer.address_store')}</li>
              <li>{t('footer.Receivers_Amplifiers')}</li>
            </ul>
          </div>
        </div>
        <div className="footer-container__content__item">
          <div className="footer-container__content__item__title">
            <h2 className="title">{t('footer.follow_us')}</h2>
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
            <h2 className="title">{t('footer.newsLetter')}</h2>
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
              <ButtonOfPage label={t('footer.subscribe')} />
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
