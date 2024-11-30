import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes as RoutePath } from "./components/utilities/Routes.tsx";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/pages/Home.tsx";
import Auth from "./components/pages/Auth.tsx";
import Dashboard from "./components/pages/Dashboard.tsx";
import Profile from "./components/pages/Profile.tsx";
import Error from "./components/pages/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main
          className={
            "text-foreground bg-[#252222] w-[100vw] overflow-hidden text-white"
          }
        >
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.AUTH} element={<Auth />} />
            <Route path={RoutePath.APP} element={<App />}>
              <Route index element={<Dashboard />} />
              <Route path={RoutePath.DASHBOARD} index element={<Dashboard />} />
              <Route path={RoutePath.PROFILE} element={<Profile />} />
            </Route>
            <Route path={RoutePath.ERROR} element={<Error />} />
          </Routes>
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
