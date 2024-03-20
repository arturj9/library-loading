import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./tailwind.css";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/auth";
import { BookProvider } from "./contexts/book";
import { CategoryBookProvider } from "./contexts/categories";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <CategoryBookProvider>
          <BookProvider>
            <App />
          </BookProvider>
        </CategoryBookProvider>
      </BookProvider>
    </AuthProvider>
    <Toaster richColors />
  </React.StrictMode>
);
