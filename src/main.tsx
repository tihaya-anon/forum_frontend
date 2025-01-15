import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "antd/dist/reset.css";
import "@/mock";
import "./styles/index.css";
import DarkModeProvider from "@/hooks/DarkModeContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
