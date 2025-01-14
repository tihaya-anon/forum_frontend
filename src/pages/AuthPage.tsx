import Login from "@/components/forum/auth/Login";
import Register from "@/components/forum/auth/Register";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
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
      <Header style={{color: "#fff"}}>
        {title} <a onClick={toggleLogin}>{action}</a>
      </Header>
      <Content>{login ? <Login /> : <Register />}</Content>
    </Layout>
  );
};

export default memo(AuthPage);
