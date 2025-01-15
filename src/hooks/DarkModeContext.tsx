// DarkModeContext.tsx
import React, { useState, memo } from "react";
import type { FC, ReactNode } from "react";
import { DarkModeContext } from "./useDarkMode";

interface IProps {
  children?: ReactNode;
}

const DarkModeProvider: FC<IProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", String(newDarkMode));
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
export default memo(DarkModeProvider);
