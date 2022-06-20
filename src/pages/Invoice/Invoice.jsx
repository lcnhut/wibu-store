import { CheckCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import { Spin, Table } from 'antd';
import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllInvoiceAsync } from '../../store/Slice/invoice/invoiceSlice';

const Invoice = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.invoice.list);
  const isLoading = useSelector((state) => state.invoice.isLoading);

  useEffect(() => {
    dispatch(getAllInvoiceAsync());
  }, []);

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

  return (
    <Spin tip="Loading..." size="large" spinning={isLoading}>
      <div className="admin__page">
        {/* <Input
          className="search__input"
          placeholder="Search product"
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
        /> */}
        <Table
          className="product__table"
          dataSource={invoiceData}
          columns={columns}
        />
      </div>
    </Spin>
  );
};

export default Invoice;
