import { CheckCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import { Input, Spin, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllInvoiceAsync } from '../../store/Slice/invoice/invoiceSlice';

const Invoice = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.invoice.list);
  const isLoading = useSelector((state) => state.invoice.isLoading);
  const [invoice, setInvoice] = useState(invoiceData);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getAllInvoiceAsync());
  }, []);

  useEffect(() => {
    setInvoice(invoiceData);
  }, [invoiceData]);

  const columns = [
    {
      title: 'Customer',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Order Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, record) => {
        return <p>{moment(record.createdAt * 1000).format('DD/MM/YYYY')}</p>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        return record.status === 0 ? (
          <InfoCircleTwoTone twoToneColor="#edbe22" />
        ) : (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        );
      },
    },
  ];

  // Handle search product by name
  const onSearch = (value) => {
    const currValue = value;
    setSearchValue(value);
    const filteredData = invoiceData.filter(
      (entry) =>
        entry.customerName.toLowerCase().includes(currValue) ||
        entry.customerName.toUpperCase().includes(currValue) ||
        entry.price.toString().includes(currValue) ||
        entry.contact.includes(currValue)
    );
    setInvoice(filteredData);
  };

  return (
    <Spin tip="Loading..." size="large" spinning={isLoading}>
      <div className="admin__page">
        <Input
          className="search__input"
          placeholder="Search product"
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Table
          className="product__table"
          dataSource={invoice}
          columns={columns}
        />
      </div>
    </Spin>
  );
};

export default Invoice;
