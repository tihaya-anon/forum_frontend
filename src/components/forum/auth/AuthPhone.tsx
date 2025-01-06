import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { userService } from "../../../services/userService";
import type { UserAuthPhone } from "../../../types/vo/user/UserAuthPhone";

const AuthPhone: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: UserAuthPhone) => {
    try {
      setLoading(true);
      await userService.authPhone(values);
      message.success(
        "Phone verification code sent successfully"
      );
    } catch (error) {
      message.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      name="auth-phone"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="authType"
        label="Authentication Type"
        rules={[
          {
            required: true,
            message: "Please select auth type",
          },
        ]}
      >
        <Select>
          <Select.Option value="SMS">SMS</Select.Option>
          <Select.Option value="CALL">
            Phone Call
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number",
          },
          {
            pattern: /^[0-9]{11}$/,
            message: "Please enter a valid phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Get Verification Code
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthPhone;
