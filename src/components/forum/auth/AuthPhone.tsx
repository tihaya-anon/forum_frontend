import React from "react";
import { Form, Input, Button, Select } from "antd";
import { userService } from "@/services/userService";
import type { UserAuthPhone } from "@/types/vo/user/UserAuthPhone";
import useAsyncRequest from "@/hooks/useAsyncRequest";
import type { AuthType } from "@/types/AuthType";

const AuthPhone: React.FC = () => {
  const [form] = Form.useForm();
  const [authTypeOptions, setAuthTypeOptions] =
    React.useState<AuthType[]>([]);
  const authPhone = useAsyncRequest(userService.authPhone);
  React.useEffect(() => {
    const fetchAuthTypes = async () => {
      const types = (await userService.authTypes()).data;
      setAuthTypeOptions(types);
    };
    fetchAuthTypes();
  }, []);
  const onFinish = async (data: UserAuthPhone) => {
    const result = await authPhone.request(data);
    console.log(result);
    console.log(authPhone.error);
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
          {authTypeOptions.map((type) => (
            <Select.Option
              key={type.value}
              value={type.value}
            >
              {type.label}
            </Select.Option>
          ))}
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
          loading={authPhone.loading}
        >
          Get Verification Code
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthPhone;
