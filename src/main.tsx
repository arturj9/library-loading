import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./tailwind.css";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Toaster richColors />
  </React.StrictMode>
);
