/* eslint-disable react/prop-types */
import { Form, Input, InputNumber, Modal } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import formatSubmitData from '../../../utils/FormatSubmitData/formatSubmitData';
import { DynamicColorField } from '../../DynamicField/DynamicColorField';
import { DynamicImageField } from '../../DynamicField/DynamicImageField';

const UpdateProductForm = (props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const {
    visibleUpdateForm,
    handleOkUpdate,
    handleCancelUpdate,
    productToUpdate,
  } = props;

  const updateColorsData = [];

  productToUpdate.colors.forEach((curr) => {
    curr.sizes.forEach((size) => {
      updateColorsData.push({
        color: curr.color,
        size: size.size,
        quantity: size.inStock,
      });
    });
  });

  useEffect(() => {
    form.setFieldsValue({
      name: productToUpdate.name,
      price: productToUpdate.price,
      description: productToUpdate.description,
      images: productToUpdate.image,
      colors: updateColorsData,
    });
  }, [productToUpdate]);

  const onFinish = (values) => {
    const transformData = formatSubmitData(values);
    handleOkUpdate(transformData);
  };

  return (
    <>
      {productToUpdate && (
        <Modal
          title={t('admin.product.update_modal_label')}
          visible={visibleUpdateForm}
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
          onCancel={handleCancelUpdate}
        >
          <Form
            form={form}
            name="control-hooks"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
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
              <InputNumber />
            </Form.Item>
            <DynamicImageField />
            <Form.Item
              name="description"
              label={t('admin.product.description')}
            >
              <Input />
            </Form.Item>
            <DynamicColorField
              colors={productToUpdate.colors}
              productToUpdate={productToUpdate}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default UpdateProductForm;
