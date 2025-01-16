import CommonLayout from "@/layout/CommonLayout";
import MainFooter from "@/components/common/MainFooter";
import PostHeader from "@/layout/post/PostHeader";
import PostContent from "@/layout/post/PostContent";
import MessageHeader from "@/layout/message/MessageHeader";
import MessageContent from "@/layout/message/MessageContent";
import UserHeader from "@/layout/user/UserHeader";
import UserContent from "@/layout/user/UserContent";
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const MainPage: FC<IProps> = () => {
  const location = useLocation();
  const [path, setPath] = useState<string>("post");
  useEffect(
    () => setPath(`${location.pathname.slice(1)}`),
    [location]
  );
  return (
    <CommonLayout>
      {path === "post" && (
        <>
          <PostHeader />
          <PostContent />
        </>
      )}
      {path === "message" && (
        <>
          <MessageHeader />
          <MessageContent />
        </>
      )}
      {path === "user" && (
        <>
          <UserHeader />
          <UserContent />
        </>
      )}
      <MainFooter section={path} />
    </CommonLayout>
  );
};

export default memo(MainPage);
