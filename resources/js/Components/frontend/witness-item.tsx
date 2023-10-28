import React from "react";

import imgStars from "../../assets/images/svg/stars.svg";

function WitnessItem(props: {
    image: string;
    name: string;
    title: string;
    description: string;
}) {
    return (
        <div className="witness_item">
            <div className="witness_item__struct">
                <div className="witness_item__header">
                    <div className="witness_item_pic">
                        <img src={props.image} alt={props.image} />
                    </div>

                    <div className="witness_item_info">
                        <div className="text bold">{props.name}</div>
                        <div className="text">{props.title}</div>

                        <img src={imgStars} alt={imgStars} />
                    </div>
                </div>

                <q className="citation">{props.description}</q>
            </div>
        </div>
    );
}

export default WitnessItem;
