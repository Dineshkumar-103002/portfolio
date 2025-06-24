// main.jsx or main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./app.css"; // ✅ Must match filename
// ✅ Import this

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        {/* ✅ Wrap your App here */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error("Root element with id 'root' not found");
}
