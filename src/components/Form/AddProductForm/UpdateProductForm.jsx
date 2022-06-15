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
  console.log(productToUpdate);
  useEffect(() => {
    form.setFieldsValue({
      name: productToUpdate.name,
      price: productToUpdate.price,
      description: productToUpdate.description,
      colors: productToUpdate.colors.map((c, id) => c.color),
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
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing first name",
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing last name",
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <Form
            labelCol={{
              span: 4,
            }}
          >
            <Form.Item label="Colors">
              <Collapse>
                <Panel header="All">
                  {productToUpdate.colors.map((c, id) => (
                    <Collapse key={id}>
                      <Panel>
                        <Form.Item label="Color">
                          <Input defaultValue={c.color} />
                        </Form.Item>
                        {c.sizes.map((s, i) => (
                          <Collapse>
                            <Panel>
                              <Form.Item label="Size">
                                <Input defaultValue={s.size} />
                              </Form.Item>
                              <Form.Item label="In Stock">
                                <Input defaultValue={s.inStock} />
                              </Form.Item>
                            </Panel>
                          </Collapse>
                        ))}
                      </Panel>
                    </Collapse>
                  ))}
                </Panel>
              </Collapse>
            </Form.Item>
          </Form> */}
        </Modal>
      )}
    </>
  );
};

export default UpdateProductForm;
