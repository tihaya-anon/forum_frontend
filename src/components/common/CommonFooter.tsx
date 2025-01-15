import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const CommonFooter: FC<IProps> = () => {
  return <div>CommonFooter</div>;
};

export default memo(CommonFooter);
