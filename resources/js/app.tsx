import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "../css/app.css";
import "./bootstrap";
import ScrollToTop from "./Components/frontend/scroll-to-top";
import "./index.scss";
import AppRoutes from "./routes";

createRoot(document.getElementById("app") || document.body).render(
    <BrowserRouter>
        <React.StrictMode>
            <ScrollToTop />
            <AppRoutes />
        </React.StrictMode>
    </BrowserRouter>
);
