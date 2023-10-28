import { Outlet } from "react-router-dom";

import AsideMenu from "../../Components/Backend/aside-menu";
import Header from "../../Components/Backend/header";

import "./App.scss";
import "./index.scss";

export default function BackendLayout() {
    return (
        <div className="Backend">
            <div className="page text-slate-600">
                <AsideMenu />
                <main className="mainContainer">
                    <div className="mainContainer__struct">
                        <Header />

                        <div className="flex-1 pt-20 text-inherit">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
