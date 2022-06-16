import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Image,
  Input,
  InputNumber,
  Collapse,
  Modal,
  Row,
  Col,
  Button,
  Space,
} from "antd";
import _ from "lodash";
import React, { useEffect } from "react";
import { DynamicColorField } from "../../DynamicField/DynamicColorField";
import DynamicUpdateProduct from "../../DynamicField/DynamicUpdateProduct";
const { Panel } = Collapse;
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
            initialValues={{
              colors: [...productToUpdate.colors],
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
                  <Image width={100} src={img.src} />
                  <Input type="file" />
                  <Form.Item>
                    <Input placeholder="or pass link image here" />
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
            <DynamicUpdateProduct
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
