import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./pages/header";
import "./index.css";
import Items from "./pages/items";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <Header />
      <hr className="lg:py-10 lg:border-[var(--colorLightGrayBlue)] hidden lg:block lg:w-[1350px] lg:mx-auto" />
      <Items />
    </NextUIProvider>
  </StrictMode>
);
