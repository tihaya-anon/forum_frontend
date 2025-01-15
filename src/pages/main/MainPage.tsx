import CommonContent from "@/layout/CommonContent";
import CommonLayout from "@/layout/CommonLayout";
import MainFooter from "@/components/common/MainFooter";
import PostHeader from "@/layout/post/PostHeader";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const MainPage: FC<IProps> = () => {
  return (
    <CommonLayout>
      <PostHeader />
      <CommonContent></CommonContent>
      <MainFooter />
    </CommonLayout>
  );
};

export default memo(MainPage);
