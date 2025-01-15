import React from "react";
import { ConfigProvider, theme } from "antd";
import { useDarkMode } from "@/hooks/useDarkMode";
import Routes from "@/routes";
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
      <Routes />
    </ConfigProvider>
  );
}

export default App;
