import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
