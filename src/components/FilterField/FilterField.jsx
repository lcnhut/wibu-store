import {
  AppstoreOutlined,
  DownOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllProduct,
  getFilterCategoriesProduct,
  getFilterColor,
  getFilterColorProduct,
  getFilterPriceProduct,
  getFilterProductSelector,
  getFilterSize,
  getFilterSizeProduct,
} from '../../store/Selector/product/filterProductSelector';
import {
  addFilterCategoriesForProduct,
  addFilterColorForProduct,
  addFilterPriceForProduct,
  addFilterSizeForProduct,
} from '../../store/Slice/product/FilterSlice';
import {
  getAllCategoryExitInProduct,
  getAllColorExitInProduct,
  getAllSizeExitInProduct,
} from '../../utils/filterFunction';
import ButtonSize from '../ButtonSize/ButtonSize';
import CircleColor from '../CircleColor/CircleColor.jsx';
import './FilterField.scss';

export default function FilterField({ showFilterButton, setValueShowItem }) {
  const dispatch = useDispatch();
  // const categoriesFilter = useSelector(getFilterCategoriesProduct);
  const AllProduct = useSelector(getAllProduct);
  const sizeCurrentForFilter = useSelector(getFilterSize);
  const colorCurrentForFilter = useSelector(getFilterColor);
  const colorFilter = getAllColorExitInProduct(AllProduct);
  const sizeFilter = getAllSizeExitInProduct(AllProduct);
  const categoriesFilter = getAllCategoryExitInProduct(AllProduct);

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

  function addFilterCategories(nameCategory) {
    dispatch(addFilterCategoriesForProduct(nameCategory));
  }
  function addFilterColor(colorFilter) {
    dispatch(addFilterColorForProduct(colorFilter));
  }

  function addFilterSize(addNewFilterSize) {
    dispatch(addFilterSizeForProduct(addNewFilterSize));
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
                <li
                  className="filter-selection-item__item"
                  value={'All'}
                  onClick={(e) => {
                    e.preventDefault();
                    addFilterCategories('');
                  }}
                >
                  All Categories
                </li>
                {categoriesFilter &&
                  categoriesFilter.map((category) => {
                    return (
                      <li
                        className="filter-selection-item__item"
                        value={category}
                        onClick={(e) => {
                          e.preventDefault();
                          addFilterCategories(category);
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
                          addFilterColor(color);
                        }}
                      >
                        <CircleColor
                          color={color}
                          active={
                            colorCurrentForFilter.includes(color) ? true : false
                          }
                        />
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
                <li
                  onClick={() => {
                    addFilterSize(0);
                  }}
                >
                  <ButtonSize
                    number={0}
                    active={sizeCurrentForFilter === 0 ? true : false}
                  />
                </li>
                {sizeFilter &&
                  sizeFilter.map((size) => {
                    return (
                      <li
                        onClick={() => {
                          addFilterSize(size);
                        }}
                      >
                        <ButtonSize
                          number={size}
                          active={sizeCurrentForFilter === size ? true : false}
                        />
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
                <li
                  className="filter-selection-item__item"
                  onClick={() => {
                    addFilterPrice(50);
                  }}
                >
                  Less than $50
                </li>
                <li
                  className="filter-selection-item__item"
                  onClick={() => {
                    addFilterPrice(100);
                  }}
                >
                  $50-$100
                </li>
                <li
                  className="filter-selection-item__item"
                  onClick={() => {
                    addFilterPrice(150);
                  }}
                >
                  $100-$150
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
