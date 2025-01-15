import CommonHeader from "@/components/common/CommonHeader";
import Login from "@/components/forum/auth/Login";
import Register from "@/components/forum/auth/Register";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const AuthPage: FC<IProps> = () => {
  const [title, setTitle] = React.useState<string>("Login");
  const [action, setAction] =
    React.useState<string>("Register");
  const [login, setLogin] = React.useState<boolean>(true);
  const toggleLogin = () => {
    setLogin((prevLogin) => {
      const newLogin = !prevLogin;
      setTitle(newLogin ? "Login" : "Register");
      setAction(newLogin ? "Register" : "Login");
      return newLogin;
    });
  };
  return (
    <Layout>
      <CommonHeader>
        <div className="flex justify-between items-center">
          <div className="font-bold text-white">
            {title}
          </div>
          <a
            style={{ color: "#69b1ff" }}
            onClick={toggleLogin}
          >
            {action}
          </a>
        </div>
      </CommonHeader>
      <Content className="mt-16 px-8 py-8 overflow-auto">
        {login ? <Login /> : <Register />}
      </Content>
    </Layout>
  );
};

export default memo(AuthPage);
