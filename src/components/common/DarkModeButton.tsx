import { useDarkMode } from "@/hooks/useDarkMode";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface IProps {
  children?: ReactNode;
}

const DarkModeButton: FC<IProps> = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
    if (darkMode) {
      return (
        <FaSun
          onClick={toggleDarkMode}
          className="text-white text-lg hover:cursor-pointer"
        />
      );
    } else {
      return (
        <FaMoon
          onClick={toggleDarkMode}
          className="text-white text-lg hover:cursor-pointer"
        />
      );
    }
};

export default memo(DarkModeButton);
