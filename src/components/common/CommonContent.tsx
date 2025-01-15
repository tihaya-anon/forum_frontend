import { Content } from "antd/es/layout/layout";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const CommonContent: FC<IProps> = ({ children }) => {
  return (
    <Content className="mt-16 px-8 py-8 overflow-auto flex-grow">
      {children}
    </Content>
  );
};

export default memo(CommonContent);
