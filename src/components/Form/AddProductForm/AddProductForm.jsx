import { Form, Input, InputNumber, Modal } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import formatSubmitData from '../../../utils/FormatSubmitData/formatSubmitData';
import { DynamicColorField } from '../../DynamicField/DynamicColorField';
import { DynamicImageField } from '../../DynamicField/DynamicImageField';

const AddProductForm = (props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  // eslint-disable-next-line react/prop-types
  const { handleSubmitForm, visible, onCancel, confirmLoading } = props;

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    let transformData = formatSubmitData(values);
    handleSubmitForm(transformData);
  };

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
          <Input />
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
