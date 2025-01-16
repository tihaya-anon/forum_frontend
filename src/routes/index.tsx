import AuthPage from "@/pages/AuthPage";
import MainPage from "@/pages/main/MainPage";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

interface IProps {
  children?: ReactNode;
}
const Routes = () => {
  const routes = useRoutes([
    { path: "/login", element: <AuthPage /> },
    { path: "/", element: <Navigate to={"/post"} /> },
    { path: "/post", element: <MainPage /> },
    { path: "/message", element: <MainPage /> },
    { path: "/user", element: <MainPage /> },
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
