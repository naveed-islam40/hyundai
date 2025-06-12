import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { PaintServiceProvider } from "./context/PaintMatrixContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      position="top-center"
      richColors
      style={{ backgroundColor: "white" }}
    />
    <PaintServiceProvider>
      <App />
    </PaintServiceProvider>
  </StrictMode>
);
