import { Form, Image, Input, InputNumber, Modal } from 'antd';
import React, { useEffect } from 'react';

import DynamicColorFieldUpdate from '../../DynamicField/DynamicColorFieldUpdate';

const UpdateProductForm = (props) => {
  const [form] = Form.useForm();
  const {
    visibleUpdateForm,
    handleOkUpdate,
    handleCancelUpdate,
    productToUpdate,
    idToUpdate,
  } = props;

  useEffect(() => {
    form.setFieldsValue({
      name: productToUpdate.name,
      price: productToUpdate.price,
      description: productToUpdate.description,
      colors: productToUpdate.colors,
    });
  }, [idToUpdate]);

  return (
    <>
      {productToUpdate && (
        <Modal
          title="Update Product"
          visible={visibleUpdateForm}
          onOk={handleOkUpdate}
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
              <InputNumber />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="image"
              label="Images"
            >
              {productToUpdate.image.map((img, id) => (
                <>
                  <Image
                    width={100}
                    src={img.src}
                    style={{ marginBottom: '20px' }}
                  />
                  <Form.Item>
                    <Input placeholder="Update new image here with a link" />
                  </Form.Item>
                </>
              ))}
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <DynamicColorFieldUpdate
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
