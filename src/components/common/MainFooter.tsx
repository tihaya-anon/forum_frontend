import React, { memo, useState } from "react";
import { Footer } from "antd/es/layout/layout";
import {
  FaNewspaper,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: React.ReactNode;
  section: string;
}

const MainFooter: FC<IProps> = ({ section }) => {
  const [selectedIcon, setSelectedIcon] =
    useState<string>(section);
  const navigate = useNavigate();

  const handleIconClick = (path: string) => {
    if (selectedIcon !== path) {
      setSelectedIcon(path);
    }
    navigate(`/${path}`);
  };

  return (
    <Footer className="w-full fixed bottom-0 left-0 right-0 z-10 bg-black text-white h-[8vh]">
      <div className="flex justify-between items-center w-full h-full">
        <FaNewspaper
          size={24}
          className={`cursor-pointer ${selectedIcon === "post" ? "text-primary" : "hover:text-gray-400"}`}
          onClick={() => handleIconClick("post")}
        />
        <FaEnvelope
          size={24}
          className={`cursor-pointer ${selectedIcon === "message" ? "text-primary" : "hover:text-gray-400"}`}
          onClick={() => handleIconClick("message")}
        />
        <FaUser
          size={24}
          className={`cursor-pointer ${selectedIcon === "user" ? "text-primary" : "hover:text-gray-400"}`}
          onClick={() => handleIconClick("user")}
        />
      </div>
    </Footer>
  );
};

export default memo(MainFooter);
