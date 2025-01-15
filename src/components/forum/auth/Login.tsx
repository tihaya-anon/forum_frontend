import type { AuthType } from "#/AuthType";
import type { UserLogin } from "#/vo/user";
import type { FC, ReactNode } from "react";

import React, { memo } from "react";
import { userService } from "@/services/userService";
import { Button, Form, Input, message, Select } from "antd";
import useAsyncRequest from "@/hooks/useAsyncRequest";

interface IProps {
  children?: ReactNode;
}

const Login: FC<IProps> = () => {
  const [loginForm] = Form.useForm();
  const [authTypeOptions, setAuthTypeOptions] =
    React.useState<AuthType[]>([]);
  React.useEffect(() => {
    const fetchAuthTypes = async () => {
      const types = (await userService.authTypes()).data;
      setAuthTypeOptions(types);
    };
    fetchAuthTypes();
  }, []);
  const login = useAsyncRequest(userService.login);
  const onLoginFinish = async (data: {
    loginPayload: UserLogin;
    authType: string;
  }) => {
    const result = await login.request(
      data.loginPayload,
      data.authType
    );
    console.table(result?.data);
    message.success(result?.msg);
  };
  return (
    <>
      <Form
        form={loginForm}
        name="login"
        onFinish={onLoginFinish}
        layout="vertical"
        className="h-100%"
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
          name={["loginPayload", "phone"]}
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["loginPayload", "password"]}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={["loginPayload", "token"]}
          label="Token"
          rules={[
            {
              required: true,
              message: "Please input your token",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={login.loading}
            block
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default memo(Login);
