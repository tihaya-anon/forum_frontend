import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import CommonContent from "@/layout/CommonContent";

interface IProps {
  children?: ReactNode;
}

const MessageContent: FC<IProps> = () => {
  return <CommonContent>MessageContent</CommonContent>;
};

export default memo(MessageContent);
