import React from "react";
import { Outlet } from "react-router-dom";

import AsideMenu from "../../Components/Backend/aside-menu";
import Header from "../../Components/Backend/header";

import "./App.scss";
import BackendContext from "./context";
import "./index.scss";

export default function BackendLayout() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <BackendContext.Provider value={{ menuOpen, setMenuOpen }}>
            <div className="Backend">
                <div className="page text-slate-600">
                    <AsideMenu />
                    <main className="mainContainer flex-1 overflow-auto">
                        <div className="mainContainer__struct">
                            <Header />

                            <div className="flex-1 pt-3 md:pt-20 text-inherit">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </BackendContext.Provider>
    );
}
