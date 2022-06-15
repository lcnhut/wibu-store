import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, InputNumber, Space } from "antd";
import React from "react";
import UpdateProductForm from "../Form/AddProductForm/UpdateProductForm";

const DynamicUpdateProduct = ({ productToUpdate }) => {
  return (
    <div>
      <Form.List name="colors">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Divider>
                    {console.log(field)}
                    Color {index + 1}
                    {fields.length > 0 ? (
                      <span>
                        <Button
                          type="danger"
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                          icon={<MinusCircleOutlined />}
                          style={{ marginLeft: "10px" }}
                        />
                      </span>
                    ) : null}
                  </Divider>
                  <Form.Item
                    name={[index, "color"]}
                    label="Color"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[index, "size"]}
                    label="Size"
                    rules={[{ required: true }]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Form.Item
                    name={[index, "inStock"]}
                    label="In Stock"
                    rules={[{ required: true }]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                </div>
              ))}
              <Divider />
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  <PlusOutlined /> Add Color
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </div>
  );
};

export default DynamicUpdateProduct;
