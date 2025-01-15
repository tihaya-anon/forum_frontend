import React, { memo, useState } from "react";
import { Footer } from "antd/es/layout/layout";
import {
  FaNewspaper,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import type { FC } from "react";

interface IProps {
  children?: React.ReactNode;
  section: "post" | "message" | "user";
}

const MainFooter: FC<IProps> = ({ section }) => {
  const [selectedIcon, setSelectedIcon] = useState<
    string | null
  >(section);

  const handleIconClick = (iconName: string) => {
    if (selectedIcon !== iconName) {
      setSelectedIcon(iconName);
    }
  };

  return (
    <Footer className="bg-black text-white py-4">
      <div className="flex justify-between items-center w-100%">
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
