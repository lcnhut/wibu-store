import React from 'react';
import { Carousel as CarouselAnt } from 'antd';
import './styles.scss';
import 'animate.css';

const Carousel = () => {
  const data = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/files/slide2.2.jpg?v=1589334520',
      box_title: 'Original Sandal',
      box_title1: 'COME REWORKED FOR 2020',
      box_title2: 'Salt Water Sandal by Hoy Shoes',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/files/slide2.3.jpg?v=1589339848',
      box_title: 'Trekky Sandals',
      box_title1: 'COME REWORKED FOR 2020',
      box_title2: 'Mismatched Bandana Sandals Were A Hit Last Summer',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0277/0472/1542/files/slide2.1.jpg?v=1589340637',
      box_title: 'Original Sandal',
      box_title1: 'COME REWORKED FOR 2020',
      box_title2: 'Woven Raffia Upper With Leather Sole',
    },
  ];

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <CarouselAnt autoplay className="carousel__wrapper" afterChange={onChange}>
      {data.map((item, id) => (
        <div key={id}>
          <div
            style={{ backgroundImage: `url(${item.img})` }}
            className="carousel__item"
          >
            <div className="carousel__content">
              <h3 className="animate__animated animate__fadeInRight">
                {item.box_title1}
              </h3>
              <h1 className="animate__animated animate__fadeInLeft">
                {item.box_title}
              </h1>
              <h3 className="animate__animated animate__fadeInUp">
                {item.box_title2}
              </h3>
              <button
                style={{ padding: '10px 35px' }}
                className="carousel__content__btn"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ))}
    </CarouselAnt>
  );
};

export default Carousel;
