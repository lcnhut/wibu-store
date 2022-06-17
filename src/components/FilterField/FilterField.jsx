import {
  AppstoreOutlined,
  DownOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  // addFilterColorForProduct,
  getAllColorOfProduct,
  getAllProduct,
  getFilterCategories,
  getFilterColor,
  getFilterPrice,
  getFilterSize,
} from '../../store/Selector/product/filterProductSelector';
import {
  addFilterCategoriesForProduct,
  addFilterForProduct,
  addFilterPriceForProduct,
} from '../../store/Slice/product/FilterSlice';
import ButtonSize from '../ButtonSize/ButtonSize';
import CircleColor from '../CircleColor/CircleColor.jsx';
import './FilterField.scss';

export default function FilterField({ showFilterButton, setValueShowItem }) {
  const dispatch = useDispatch();
  const categoriesFilter = useSelector(getFilterCategories);
  const sizeFilter = useSelector(getFilterSize);
  const colorFilter = useSelector(getFilterColor);
  const priceFilter = useSelector(getFilterPrice);

  const menu = (
    <Menu
      items={[
        {
          label: 'Featured',
          key: '1',
        },
        {
          label: 'Best Selling',
          key: '2',
        },
        {
          label: 'Alphabetically, A-Z',
          key: '3',
        },
        {
          label: 'Alphabetically, Z-A',
          key: '4',
        },
        {
          label: 'Price, low to high',
          key: '5',
        },
        {
          label: 'Date, new to old',
          key: '6',
        },
        {
          label: 'Date, old to new',
          key: '7',
        },
      ]}
    />
  );
  let getAllColorProduct = useSelector(getAllColorOfProduct);

  function addFilterCategories(nameCategory) {
    dispatch(addFilterCategoriesForProduct(nameCategory));
  }
  function addFilterColor(colorFilter) {
    // dispatch(addFilterColorForProduct(colorFilter));
  }

  function addFilterSize(addNewFilterSize) {
    dispatch(addFilterForProduct(addfilterSize));
  }
  function addFilterPrice(newPrice) {
    dispatch(addFilterPriceForProduct(newPrice));
  }
  return (
    <>
      <div className="filter__container">
        <div className="filter__container__filter">
          <div
            className="filter__container__filter__filterbtn"
            onClick={() => {
              showFilterButton();
            }}
          >
            <div>
              <FilterOutlined />
            </div>
            <p>filter</p>
          </div>
        </div>
        <div className="filter__container__filter__featuredbtn">
          <div className="featuredbtn">
            <AppstoreOutlined style={{ fontSize: '24px' }} />
            <div className="showGridFilter">
              <div
                className="showGridFilter__item"
                onClick={() => {
                  setValueShowItem(2);
                }}
              >
                2
              </div>
              <div
                className="showGridFilter__item"
                onClick={() => {
                  setValueShowItem(3);
                }}
              >
                3
              </div>
              <div
                className="showGridFilter__item"
                onClick={() => {
                  setValueShowItem(4);
                }}
              >
                4
              </div>
              <div
                className="showGridFilter__item"
                onClick={() => {
                  setValueShowItem(5);
                }}
              >
                5
              </div>
            </div>
          </div>
          <Dropdown overlay={menu}>
            <Button
              style={{
                padding: ' 8px 20px',
                minWidth: '128px',
                minHeight: '42px',
                border: ' 1px solid #000',
                color: '#000',
              }}
            >
              <Space size="large">
                Featured
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="filter-selection">
        <div className="filter-selection__container">
          <div className="filter-selection-item">
            <div className="filter-selection-item__title">
              <h2 className="title">Categories</h2>
            </div>
            <div className="filter-selection-item__content">
              <ul className="filter-selection-item__items">
                {categoriesFilter &&
                  categoriesFilter.map((category) => {
                    return (
                      <li
                        className="filter-selection-item__item"
                        value={category}
                        onClick={(e) => {
                          e.preventDefault();
                          addFilterCategories(e.target.innerText);
                        }}
                      >
                        {category}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="filter-selection-item">
            <div className="filter-selection-item__title">
              <h2 className="title">Color Option</h2>
              <ul className="filter-selection-item__cricles">
                {colorFilter &&
                  colorFilter.map((color, index) => {
                    return (
                      <li
                        key={index}
                        value={color}
                        onClick={() => {
                          dispatch(addFilterColorForProduct(color));
                          // console.log(color);
                        }}
                      >
                        <CircleColor color={color} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="filter-selection-item">
            <div className="filter-selection-item__title">
              <h2 className="title">Size Option</h2>
            </div>
            <div className="filter-selection-item__size">
              <ul className="filter-selection-item__size__list">
                {sizeFilter &&
                  sizeFilter.map((size) => {
                    return (
                      <li>
                        <ButtonSize number={size} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="filter-selection-item">
            <div className="filter-selection-item__title">
              <h2 className="title">Price Filter</h2>
            </div>
            <div className="filter-selection-item__content">
              <ul className="filter-selection-item__items">
                <li className="filter-selection-item__item">Less than $50</li>
                <li className="filter-selection-item__item">$50-$100</li>
                <li className="filter-selection-item__item">$100-$150</li>
              </ul>
            </div>
          </div>
          <div className="filter-selection-item">
            <div className="filter-selection-item__title">
              <h2 className="title">Tags</h2>
            </div>
            <div style={{ fontSize: '16px' }} className="Breadcrumb-list">
              <Breadcrumb>
                <Breadcrumb.Item>$100-$150</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">$50-$100</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">36</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item> 37</Breadcrumb.Item>
                <Breadcrumb.Item> 38 </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">39</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">40</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Black</Breadcrumb.Item>
                <Breadcrumb.Item> Cornsilk</Breadcrumb.Item>
                <Breadcrumb.Item> Gold</Breadcrumb.Item>
                <Breadcrumb.Item> GoldenRod </Breadcrumb.Item>
                <Breadcrumb.Item> Less than $50 </Breadcrumb.Item>
                <Breadcrumb.Item> Navy </Breadcrumb.Item>
                <Breadcrumb.Item> Pink </Breadcrumb.Item>
                <Breadcrumb.Item> Silver </Breadcrumb.Item>
                <Breadcrumb.Item> White </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
