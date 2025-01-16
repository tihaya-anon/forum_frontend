import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "antd/dist/reset.css";
import "@/mock";
import "./styles/index.css";
import DarkModeProvider from "@/hooks/DarkModeContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
