import { Form, Input, InputNumber, Modal, Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import formatSubmitData from '../../../utils/FormatSubmitData/formatSubmitData';
import { DynamicColorField } from '../../DynamicField/DynamicColorField';
import { DynamicImageField } from '../../DynamicField/DynamicImageField';

const { Option } = Select;

const AddProductForm = (props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  // eslint-disable-next-line react/prop-types
  const { handleSubmitForm, visible, onCancel, confirmLoading } = props;

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    console.log(values);
    let transformData = formatSubmitData(values);
    handleSubmitForm(transformData);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const categoryOption = [
    {
      label: 'High-tops',
      value: 'High-tops',
    },
    {
      label: 'Running shoes',
      value: 'Running shoes',
    },
    {
      label: 'Climbing shoes',
      value: 'Climbing shoes',
    },
    {
      label: 'Old skool',
      value: 'Old skool',
    },
    {
      label: 'Hiking boots',
      value: 'Hiking boots',
    },
  ];

  return (
    <Modal
      className="modal__container"
      title="Add Product Form"
      visible={visible}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onFinish(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        name="control-hooks"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          images: [''],
          colors: [''],
          category: categoryOption[0].value,
        }}
      >
        <Form.Item
          name="name"
          label={t('admin.product.name')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label={t('admin.product.price')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          name="category"
          label={t('admin.product.category')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={categoryOption[0]}
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {categoryOption.map((item, index) => {
              return (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="description" label={t('admin.product.description')}>
          <Input />
        </Form.Item>
        <DynamicImageField />
        <DynamicColorField />
      </Form>
    </Modal>
  );
};
export default AddProductForm;
