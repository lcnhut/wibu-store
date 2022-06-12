import {
  AppstoreOutlined,
  DownOutlined,
  FilterOutlined,
  HolderOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import React from "react";
import "./FilterField.scss";
export default function filterField() {
  const menu = (
    <Menu
      items={[
        {
          label: "Featured",
          key: "1",
          // icon: <UserOutlined />,
        },
        {
          label: "Best Selling",
          key: "2",
          // icon: <UserOutlined />,
        },
        {
          label: "Alphabetically, A-Z",
          key: "3",
          // icon: <UserOutlined />,
        },
        {
          label: "Alphabetically, Z-A",
          key: "4",
          // icon: <UserOutlined />,
        },
        {
          label: "Price, low to high",
          key: "5",
          // icon: <UserOutlined />,
        },
        {
          label: "Date, new to old",
          key: "6",
          // icon: <UserOutlined />,
        },
        {
          label: "Date, old to new",
          key: "7",
          // icon: <UserOutlined />,
        },
      ]}
    />
  );

  return (
    <div className="filter__container">
      <div className="filter__container__filter">
        <div className="filter__container__filter__filterbtn">
          <div>
            <FilterOutlined />
          </div>
          <p>filter</p>
        </div>
      </div>
      <div className="filter__container__filter__featuredbtn">
        <div className="featuredbtn">
          <AppstoreOutlined style={{ fontSize: "24px" }} />
          <div class="showGridFilter">
            <div className="showGridFilter__item">2</div>
            <div className="showGridFilter__item">4</div>
            <div className="showGridFilter__item">3</div>
          </div>
        </div>
        <Dropdown overlay={menu}>
          <Button
            style={{
              padding: " 8px 20px",
              minWidth: "128px",
              minHeight: "42px",
              border: " 1px solid #000",
              color: "#000",
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
  );
}
