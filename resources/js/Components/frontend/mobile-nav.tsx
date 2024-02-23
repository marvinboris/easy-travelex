import { Link } from "react-router-dom";
import React from "react";

import facebook from "../../assets/images/svg/facebook.svg";
import linkedin from "../../assets/images/svg/linkedin.svg";
import twitter from "../../assets/images/svg/twitter.svg";

const MobileNav = (props: {
    navItems: { path: string; label: string }[];
    menuIsActive: boolean;
    setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <nav
            className={`mobil_nav ${
                props.menuIsActive ? "mobil_nav_active" : ""
            }`}
        >
            <ul>
                {props.navItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            onClick={() => props.setMenuIsActive(false)}
                            className={`link`}
                        >
                            <span className="value">
                                {item.label === "Tours Packages"
                                    ? "Tours"
                                    : item.label}
                            </span>
                            <span className="design">
                                <div className="carret"></div>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="menu_social">
                {/* <Boutons text="Apply now" isIcon={true}></Boutons> */}

                <div className="social_link_container">
                    <span>
                        <img src={facebook} alt={facebook} />
                    </span>
                    <span>
                        <img src={twitter} alt={twitter} />
                    </span>
                    <span>
                        <img src={linkedin} alt={linkedin} />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
