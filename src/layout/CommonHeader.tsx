import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Header } from "antd/es/layout/layout";
import DarkModeButton from "../components/common/DarkModeButton";

interface IProps {
  children?: ReactNode;
}

const CommonHeader: FC<IProps> = ({ children }) => {
  // 判断children的数量
  const childArray = React.Children.toArray(children);

  return (
    <Header className="w-full fixed top-0 left-0 right-0 z-10 bg-black h-[8vh]">
      <div className="flex justify-between items-center w-full h-full">
        {/* DarkModeButton 在最左边 */}
        <DarkModeButton />

        <div className="flex flex-1 justify-center">
          {/* 中间内容 */}
          {childArray.length > 1 && (
            <div className="flex space-x-4">
              {childArray.slice(0, -1)}
              {/* 前面所有元素，均匀分布 */}
            </div>
          )}
        </div>

        {/* 最后一个子元素放在右边 */}
        {childArray.length > 0 &&
          childArray[childArray.length - 1]}
      </div>
    </Header>
  );
};

export default memo(CommonHeader);
