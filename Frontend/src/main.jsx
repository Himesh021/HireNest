import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ✅ THIS LINE IS REQUIRED
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster></Toaster>
  </React.StrictMode>
);
