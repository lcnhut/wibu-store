import { Form, Input, InputNumber, Modal } from "antd";
import _ from "lodash";
import React, { useEffect } from "react";
import { DynamicColorField } from "../../DynamicField/DynamicColorField";

const UpdateProductForm = (props) => {
  const [form] = Form.useForm();
  const {
    visibleUpdateForm,
    handleOkUpdate,
    handleCancelUpdate,
    productToUpdate,
    idToUpdate,
  } = props;
  console.log(productToUpdate);
  useEffect(() => {
    form.setFieldsValue({
      name: productToUpdate.name,
      price: productToUpdate.price,
      image: productToUpdate.image,
      description: productToUpdate.description,
      color: productToUpdate.colors.map((c, id) => c.color),
      size: productToUpdate.colors.map((c, id) =>
        c.sizes.map((size) => size.size)
      ),
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
              label="Image"
            >
              <Input />
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
            <DynamicColorField />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default UpdateProductForm;
