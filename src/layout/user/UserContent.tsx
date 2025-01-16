import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import CommonContent from "@/layout/CommonContent";

interface IProps {
  children?: ReactNode;
}

const UserContent: FC<IProps> = () => {
  return <CommonContent>UserContent</CommonContent>;
};

export default memo(UserContent);
