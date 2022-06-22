import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const DynamicColorField = () => {
  const { t } = useTranslation();

  return (
    <Form.List name="colors">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>
                  {t('admin.product.color') + ' '} {index + 1}
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
                  label={t('admin.product.color')}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[index, 'size']}
                  label={t('admin.product.size')}
                  rules={[{ required: true }]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                  name={[index, 'quantity']}
                  label={t('admin.product.quantity')}
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
                <PlusOutlined /> {t('admin.product.add_color')}
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};
