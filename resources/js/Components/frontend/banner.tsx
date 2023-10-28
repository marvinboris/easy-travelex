import React from "react";

import imgBanner from "../../assets/images/banner.png";

const Banner = (props: { title: string }) => {
    return (
        <div className="banner">
            <div className="image">
                <img src={imgBanner} alt={imgBanner} />
            </div>
            <div className="text">
                <div className="value">{props.title}</div>
            </div>
        </div>
    );
};

export default Banner;
