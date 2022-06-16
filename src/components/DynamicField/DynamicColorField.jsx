import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber } from 'antd';
import React from 'react';

export const DynamicColorField = () => {
  return (
    <Form.List name="colors">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>
                  Color {index + 1}
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
                  name={[index, 'color']}
                  label="Color"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[index, 'size']}
                  label="Size"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                  name={[index, 'quantity']}
                  label="Quantity"
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
                style={{ width: '60%' }}
              >
                <PlusOutlined /> Add Color
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};
