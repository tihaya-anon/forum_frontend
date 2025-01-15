import React from "react";
import AuthPage from "@/pages/AuthPage";
import { ConfigProvider, theme } from "antd";
import { useDarkMode } from "@/hooks/useDarkMode";
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
          <AuthPage />
        </ConfigProvider>
    </>
  );
}

export default App;
