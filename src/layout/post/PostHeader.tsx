import CommonHeader from "@/layout/CommonHeader";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface IProps {
  children?: ReactNode;
}

const PostHeader: FC<IProps> = () => {
  return (
    <CommonHeader>
      <FaMagnifyingGlass
        className="text-white font-bold h-full"
      />
    </CommonHeader>
  );
};

export default memo(PostHeader);
