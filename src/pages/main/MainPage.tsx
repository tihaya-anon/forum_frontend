import MainFooter from "@/components/common/MainFooter";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const MainPage: FC<IProps> = () => {
  return (
    <Layout>
      <Header className="w-full fixed top-0 left-0 right-0 z-10 bg-black"></Header>
      <Content></Content>
      <MainFooter section="post"/>
    </Layout>
  );
};

export default memo(MainPage);
