import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Header } from "antd/es/layout/layout";

interface IProps {
  children?: ReactNode;
}

const CommonHeader: FC<IProps> = ({children}) => {
  return (
    <Header className="w-full fixed top-0% left-0 right-0 z-10 bg-black" >{children}</Header>
  );
};

export default memo(CommonHeader);
