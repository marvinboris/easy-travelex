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
                                <div className="carret" />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="menu_social">
                {/* <Boutons text="Apply now" isIcon={true}></Boutons> */}

                <div className="social_link_container">
                    <span>
                        <a
                            href="https://www.facebook.com/easytravelex/"
                            target="_blank"
                        >
                            <img src={facebook} alt={facebook} />
                        </a>
                    </span>
                    <span>
                        <a href="" target="_blank">
                            <img src={twitter} alt={twitter} />
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.linkedin.com/company/easytravelex"
                            target="_blank"
                        >
                            <img src={linkedin} alt={linkedin} />
                        </a>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
