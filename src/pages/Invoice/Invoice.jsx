import { CheckCircleTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import { Input, Spin, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getAllInvoiceAsync } from '../../store/Slice/invoice/invoiceSlice';
import formatCurrency from '../../utils/formatCurrency';

const Invoice = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.invoice.list);
  const isLoading = useSelector((state) => state.invoice.isLoading);
  const [invoice, setInvoice] = useState(invoiceData);
  const [searchValue, setSearchValue] = useState('');

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  useEffect(() => {
    dispatch(getAllInvoiceAsync());
  }, []);

  useEffect(() => {
    setInvoice(invoiceData);
  }, [invoiceData]);

  const columns = [
    {
      title: t('admin.invoice.customer_name'),
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: t('admin.invoice.address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('admin.invoice.contact'),
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: t('admin.invoice.total_price'),
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => {
        return (
          <span>
            {t('admin.product.price_formatted', {
              val: formatCurrency(record.price, currentLanguage),
            })}
          </span>
        );
      },
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: t('admin.invoice.order_date'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (_, record) => {
        return <p>{moment(record.createdAt * 1000).format('DD/MM/YYYY')}</p>;
      },
    },
    {
      title: t('admin.invoice.status'),
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
          placeholder={t('admin.invoice.search_placeholder')}
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
