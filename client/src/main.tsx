import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes as RoutePath } from "./components/utilities/Routes.tsx";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/pages/Home.tsx";
import Auth from "./components/pages/Auth.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main
          className={
            "text-foreground bg-[#252222] h-screen w-full overflow-hidden text-white"
          }
        >
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.AUTH} element={<Auth />} />
            <Route path={RoutePath.APP} element={<App />} />
          </Routes>
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
