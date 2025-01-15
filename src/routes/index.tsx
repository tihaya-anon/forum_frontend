import AuthPage from "@/pages/AuthPage";
import MainPage from "@/pages/main/MainPage";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const MyRoutes: FC<IProps> = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthPage />}
      />
      <Route
        path="/"
        element={<MainPage />}
      />
    </Routes>
  );
};

export default memo(MyRoutes);
