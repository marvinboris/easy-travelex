import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "../css/app.css";
import "./bootstrap";
import ScrollToTop from "./Components/frontend/scroll-to-top";
import Wrapper from "./hoc/wrapper";
import "./index.scss";
import AppRoutes from "./routes";
import store from "./store";

createRoot(document.getElementById("app") || document.body).render(
    <Provider store={store}>
        <Wrapper>
            <BrowserRouter>
                <React.StrictMode>
                    <ScrollToTop />
                    <AppRoutes />
                </React.StrictMode>
            </BrowserRouter>
        </Wrapper>
    </Provider>
);
