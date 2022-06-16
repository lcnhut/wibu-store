import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';
import React from 'react';

export const DynamicImageField = () => {
  return (
    <Form.List name="images">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>
                  Image {index + 1}
                  {index > 0 ? (
                    <span>
                      <Button
                        type="danger"
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                        icon={<MinusCircleOutlined />}
                        style={{ marginLeft: '10px' }}
                      />
                    </span>
                  ) : null}
                </Divider>
                <Form.Item
                  name={[index, 'src']}
                  label="Image"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            ))}
            <Divider />
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
              >
                <PlusOutlined /> Add Image
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};
