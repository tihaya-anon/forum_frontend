import CommonContent from "@/layout/CommonContent";
import CommonHeader from "@/layout/CommonHeader";
import CommonLayout from "@/layout/CommonLayout";
import Login from "@/components/forum/auth/Login";
import Register from "@/components/forum/auth/Register";
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
    <CommonLayout>
      <CommonHeader>
        <div className="font-bold text-white">{title}</div>
        <a
          style={{ color: "#69b1ff" }}
          onClick={toggleLogin}
        >
          {action}
        </a>
      </CommonHeader>
      <CommonContent>
        {login ? <Login /> : <Register />}
      </CommonContent>
    </CommonLayout>
  );
};

export default memo(AuthPage);
