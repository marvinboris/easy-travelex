import { Outlet } from "react-router-dom";

import Header from "@/Components/frontend/header";
import Footer from "@/Components/frontend/footer";

import "./App.scss";
import "./index.scss";
import "./intlTelInput.scss";

export default function FrontendLayout() {
    return (
        <div className="Frontend">
            <div className="page">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
