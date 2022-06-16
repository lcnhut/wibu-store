import { Form, Input, InputNumber, Modal } from 'antd';
import React from 'react';

import { DynamicColorField } from '../../DynamicField/DynamicColorField';
import { DynamicImageField } from '../../DynamicField/DynamicImageField';

const AddProductForm = (props) => {
  const [form] = Form.useForm();
  // eslint-disable-next-line react/prop-types
  const { handleSubmitForm, visible, onCancel, confirmLoading } = props;

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    console.log(values);
    let transformData = {};
    const colorList = values.colors.map((color) => {
      return color.color;
    });

    const duplicateColor = colorList.reduce((accumulator, curValue) => {
      if (accumulator.indexOf(curValue) === -1) {
        accumulator.push(curValue);
      }

      return accumulator;
    }, []);

    const colorArr = [];

    duplicateColor.forEach((color) => {
      const listSameColor = values.colors.filter((el) => el.color === color);
      const colorObj = {
        color: color,
        sizes: [],
      };

      listSameColor.forEach((item) => {
        colorObj.sizes.push({
          size: item.size,
          inStock: item.quantity,
        });
      });
      colorArr.push(colorObj);
    });

    transformData = {
      ...values,
      colors: colorArr,
    };

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
          span: 4,
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
          label="Name"
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
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <DynamicImageField />
        <DynamicColorField />
      </Form>
    </Modal>
  );
};
export default AddProductForm;
