import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import { MDXProvider } from "@mdx-js/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  </React.StrictMode>
);
