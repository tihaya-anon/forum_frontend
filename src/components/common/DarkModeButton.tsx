import { useDarkMode } from "@/hooks/useDarkMode";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface IProps {
  children?: ReactNode;
}

const DarkModeButton: FC<IProps> = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const getIcon = () => {
    if (darkMode) {
      return (
        <FaMoon
          onClick={toggleDarkMode}
          className="text-white text-lg"
        />
      );
    } else {
      return (
        <FaSun
          onClick={toggleDarkMode}
          className="text-white text-lg"
        />
      );
    }
  };
  return getIcon();
};

export default memo(DarkModeButton);
