import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import  {Provider}  from "./context/books";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider >
      <App />
    </Provider>
  </StrictMode>
);
