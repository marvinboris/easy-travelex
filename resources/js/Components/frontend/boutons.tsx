import React from "react";

import arrowRight from "../../assets/images/svg/arrow-right.svg";

const Boutons = ({
    text,
    isIcon,
    isNice,
    onClick,
}: {
    text: string;
    isIcon?: boolean;
    isNice?: boolean;
    onClick?: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`_btn ${isNice ? "btn_nice" : ""}`}
        >
            <span>{text}</span>
            {isIcon ? <img src={arrowRight} alt={arrowRight} /> : ""}
            <div className={`hoverlay`} />
        </button>
    );
};

export default Boutons;
