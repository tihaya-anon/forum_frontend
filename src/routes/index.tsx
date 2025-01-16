import AuthPage from "@/pages/AuthPage";
import MainPage from "@/pages/main/MainPage";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

interface IProps {
  children?: ReactNode;
}
const Routes = () => {
  const routes = useRoutes([
    { path: "/login", element: <AuthPage /> },
    { path: "/", element: <MainPage /> },
  ]);
  return routes;
};
const PageRoutes: FC<IProps> = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default memo(PageRoutes);
