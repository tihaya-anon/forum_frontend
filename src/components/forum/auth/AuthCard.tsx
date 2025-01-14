import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { Card } from "antd";
import Login from "./Login";
import Register from "./Register";

interface IProps {
  children?: ReactNode;
}

const AuthCard: FC<IProps> = () => {
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
    <Card
      title={title}
      extra={<a onClick={toggleLogin}>{action}</a>}
    >
      {login ? <Login /> : <Register />}
    </Card>
  );
};

export default memo(AuthCard);
