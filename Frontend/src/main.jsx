import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ✅ THIS LINE IS REQUIRED
import { Toaster } from "./components/ui/sonner";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster></Toaster>
    </Provider>
  </React.StrictMode>,
);
