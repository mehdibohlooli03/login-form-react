
import { createRoot } from "react-dom/client";
import "./router/style55.css";
import RouteTest from "./router/routes.jsx";
import { BrowserRouter } from "react-router-dom";
import RouteFortest from "./test/router.jsx";
import AppRouter from "../test/all-test/router.jsx";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
