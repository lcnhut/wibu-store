import { Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { productApi } from "../../api";
import "./AdminPage.scss";
const { Search } = Input;

const AdminPage = () => {
  const [productData, setProductData] = useState([]);
  const [product, setProduct] = useState(productData);
  const [value, setValue] = useState("");

  const getData = async () => {
    const response = await productApi.getAll();
    setProductData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setProduct(productData);
  }, [productData]);

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => {
        return <img style={{ width: "100px" }} src={record.image} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      sorter: (a, b) => a.inStock - b.inStock,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_, record) => {
        return (
          <p style={{ width: "100%", maxWidth: "500px" }}>
            {record.description}
          </p>
        );
      },
    },
  ];

  const onSearch = (value) => {
    const currValue = value;
    setValue(value);
    const filteredData = productData.filter(
      (entry) =>
        entry.name.toLowerCase().includes(currValue) ||
        entry.name.toLowerCase().includes(currValue)
    );
    setProduct(filteredData);
  };

  return (
    <div className="admin__page">
      <Input
        className="search__input"
        placeholder="Search name"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Table
        className="product__table"
        dataSource={product}
        columns={columns}
      />
    </div>
  );
};

export default AdminPage;
