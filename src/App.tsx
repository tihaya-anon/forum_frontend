import React from "react";
import { ConfigProvider, theme } from "antd";
import { useDarkMode } from "@/hooks/useDarkMode";
import PageRoutes from "@/routes";
function App() {
  const { darkMode } = useDarkMode();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
      }}
    >
      <PageRoutes />
    </ConfigProvider>
  );
}

export default App;
