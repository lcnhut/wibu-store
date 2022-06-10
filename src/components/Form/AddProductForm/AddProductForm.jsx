import { Form, Input, InputNumber, Modal } from "antd";
import React from "react";

const AddProductForm = (props) => {
  const [form] = Form.useForm();
  // eslint-disable-next-line react/prop-types
  const { handleSubmitForm, visible, onCancel, confirmLoading } = props;

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    handleSubmitForm(values);
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
            console.log("Validate Failed:", info);
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
          name="quantity"
          label="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
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
          <InputNumber />
        </Form.Item>
        <Form.Item name="image" label="Image">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddProductForm;
