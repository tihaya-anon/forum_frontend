import CommonHeader from "@/components/common/CommonHeader";
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
        size={24}
        className="text-white font-bold"
      />
    </CommonHeader>
  );
};

export default memo(PostHeader);
