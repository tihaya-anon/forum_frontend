import React from "react";
import { ConfigProvider, theme } from "antd";
import { useDarkMode } from "@/hooks/useDarkMode";
import MainPage from "./pages/main/MainPage";
function App() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkMode
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        }}
      >
        <MainPage />
      </ConfigProvider>
    </>
  );
}

export default App;
