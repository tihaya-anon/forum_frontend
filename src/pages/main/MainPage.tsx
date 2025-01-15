import CommonLayout from "@/layout/CommonLayout";
import MainFooter from "@/components/common/MainFooter";
import PostHeader from "@/layout/post/PostHeader";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import PostContent from "@/layout/post/PostContent";

interface IProps {
  children?: ReactNode;
}

const MainPage: FC<IProps> = () => {
  return (
    <CommonLayout>
      <PostHeader />
      <PostContent />
      <MainFooter />
    </CommonLayout>
  );
};

export default memo(MainPage);
