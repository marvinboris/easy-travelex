import { useVisasContext } from "@/Pages/visas/context";
import React, { useEffect } from "react";

const MenuItem = ({ name, amount }: { name: string; amount: number }) => {
    const { activeTab, setActiveTab } = useVisasContext();
    const active = activeTab === name;

    return (
        <div
            onClick={() => setActiveTab(name)}
            className={"menu_item" + (active ? " active" : "")}
        >
            <div className="content">
                <div className="img">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 34 34"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.8848 2.75539C23.1551 2.75539 28.2566 7.89545 28.2566 14.214C28.2566 21.9813 19.3576 29.6342 16.8848 29.6342C14.4119 29.6342 5.51294 21.9813 5.51294 14.214C5.51294 7.89545 10.6144 2.75539 16.8848 2.75539ZM16.8848 4.82299C11.7543 4.82299 7.58054 9.03676 7.58054 14.214C7.58054 20.8014 15.3327 27.2193 16.8848 27.5611C18.4368 27.2179 26.189 20.8 26.189 14.214C26.189 9.03676 22.0152 4.82299 16.8848 4.82299ZM16.8861 9.6474C19.3562 9.6474 21.3659 11.6571 21.3659 14.1286C21.3659 16.5987 19.3562 18.607 16.8861 18.607C14.416 18.607 12.4063 16.5987 12.4063 14.1286C12.4063 11.6571 14.416 9.6474 16.8861 9.6474ZM16.8861 11.715C15.556 11.715 14.4739 12.797 14.4739 14.1286C14.4739 15.4587 15.556 16.5394 16.8861 16.5394C18.2163 16.5394 19.2983 15.4587 19.2983 14.1286C19.2983 12.797 18.2163 11.715 16.8861 11.715Z"
                            fill="#F6931C"
                        />
                    </svg>
                </div>
                <div className="text">
                    <div className="t1">{name}</div>
                    <div className="t2">
                        Starting from :{" "}
                        <span className="val">{amount} AED</span>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

const VisaMenu = () => (
    <div className="VisaMenu">
        <div className="struct">
            <MenuItem name="United Arab Emirates" amount={450} />
            <MenuItem name="Saudi Arabia" amount={450} />
            <MenuItem name="Zimbabwe" amount={450} />
        </div>
    </div>
);

export default VisaMenu;
