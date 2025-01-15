import type {
  UserAuthPhone,
  UserRegister,
} from "#/vo/user";
import type { AuthType } from "#/AuthType";
import type { FC, ReactNode } from "react";

import React, { memo } from "react";
import { Form, Input, Button, Select, message } from "antd";
import useAsyncRequest from "@/hooks/useAsyncRequest";
import { userService } from "@/services/userService";

interface IProps {
  children?: ReactNode;
}

const Register: FC<IProps> = () => {
  const [authPhoneForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const [authTypeOptions, setAuthTypeOptions] =
    React.useState<AuthType[]>([]);
  const authPhone = useAsyncRequest(userService.authPhone);
  const register = useAsyncRequest(userService.register);
  React.useEffect(() => {
    const fetchAuthTypes = async () => {
      const types = (await userService.authTypes()).data;
      setAuthTypeOptions(types);
    };
    fetchAuthTypes();
  }, []);
  const onAuthPhoneFinish = async (data: UserAuthPhone) => {
    const result = await authPhone.request(data);
    message.success(result?.msg);
    console.table(result);
    console.log(authPhone.error);
  };
  const onRegisterFinish = async (data: {
    verifyCode: string;
  }) => {
    const registerData: UserRegister = {
      authType: authPhoneForm.getFieldValue("authType"),
      phone: authPhoneForm.getFieldValue("phone"),
      verifyCode: data.verifyCode,
      username: registerForm.getFieldValue("username"),
      password: registerForm.getFieldValue("password"),
      pubKey: registerForm.getFieldValue("pubKey"),
      token: registerForm.getFieldValue("token"),
    };
    const result = await register.request(registerData);
    console.table(result);
  };

  return (
    <>
      <Form
        form={authPhoneForm}
        name="auth-phone"
        onFinish={onAuthPhoneFinish}
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
          label="Phone"
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
            block
          >
            Get Verification Code
          </Button>
        </Form.Item>
      </Form>

      <Form
        form={registerForm}
        onFinish={onRegisterFinish}
        name="register"
        layout="vertical"
      >
        <Form.Item
          name="verifyCode"
          label="Verification Code"
          rules={[
            {
              required: true,
              message: "Please input the verification code",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input the username",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input the password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="pubKey"
          label="Public Key"
          rules={[
            {
              required: true,
              message: "Please input the public key",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="token"
          label="Token"
          rules={[
            {
              required: true,
              message: "Please input the token",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={register.loading}
            block
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default memo(Register);
