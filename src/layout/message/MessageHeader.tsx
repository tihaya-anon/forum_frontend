import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import CommonHeader from "@/layout/CommonHeader";

interface IProps {
  children?: ReactNode;
}

const MessageHeader: FC<IProps> = () => {
  return <CommonHeader></CommonHeader>;
};

export default memo(MessageHeader);
