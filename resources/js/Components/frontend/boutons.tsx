import React from "react";

import arrowRight from "../../assets/images/svg/arrow-right.svg";

const Boutons = ({
    text,
    isIcon,
    isNice,
}: {
    text: string;
    isIcon?: boolean;
    isNice?: boolean;
}) => {
    return (
        <button className={`_btn ${isNice ? "btn_nice" : ""}`}>
            <span>{text}</span>
            {isIcon ? <img src={arrowRight} alt={arrowRight} /> : ""}
            <div className={`hoverlay`} />
        </button>
    );
};

export default Boutons;
