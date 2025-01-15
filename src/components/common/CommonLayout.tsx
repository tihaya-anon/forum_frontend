import { Layout } from "antd";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const CommonLayout: FC<IProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen flex flex-col">
      {children}
    </Layout>
  );
};

export default memo(CommonLayout);
