import React from 'react';
import { Carousel as CarouselAnt } from 'antd';
import './styles.scss';

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
  return (
    <CarouselAnt className="carousel__wrapper">
      {data.map((item, id) => (
        <div className="carousel__item" key={id}>
          <div
            style={{ backgroundColor: 'blue' }}
            className="carousel__content"
          >
            <h3>{item.box_title1}</h3>
            <h1>{item.box_title}</h1>
            <h3>{item.box_title2}</h3>
          </div>
        </div>
      ))}
    </CarouselAnt>
  );
};

export default Carousel;
