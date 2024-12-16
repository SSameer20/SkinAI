import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import App from "./pages/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/app" element={<App />} />
          </Routes>
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
