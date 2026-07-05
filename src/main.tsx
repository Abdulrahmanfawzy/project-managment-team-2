import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { RouterProvider } from 'react-router-dom';
import { Router } from "./app/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
