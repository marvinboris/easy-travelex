import { Link } from "react-router-dom";

import imgClock from "../../assets/images/clock.png";
import imgWallet from "../../assets/images/wallet.png";

import { ModelVisa } from "@/types/models/visa";

function VisaCard(props: ModelVisa) {
    return (
        <Link
            to={props.link}
            state={props}
            className="visa_type_contain__visa_card navlink"
        >
            <div className="header_visa_card">
                <div className="img">
                    <img src={props.photo} alt={props.title} />
                </div>

                <div className="contain">
                    <div className="contain__struct">
                        <div className="day_card">
                            <span className="day">{props.duration}</span>
                            <span className="title">Days</span>
                        </div>

                        <div className="visa_card_title">{props.title}</div>
                    </div>
                </div>
            </div>

            <div className="body_visa_card">
                <div className="body_visa_card__struct">
                    <div className="span">{props.description}</div>
                    <hr />
                    <div className="info_container">
                        <div className="info_container__item">
                            <div className="icon">
                                <img src={imgWallet} alt={imgWallet} />
                            </div>
                            <div className="text">
                                <span className="t1">$ {props.amount}</span>
                                <span className="t2">Starting from</span>
                            </div>
                        </div>

                        <div className="border_left" />

                        <div className="info_container__item">
                            <div className="icon">
                                <img src={imgClock} alt={imgClock} />
                            </div>
                            <div className="text">
                                <span className="t1">
                                    {props.processing_period_start} -{" "}
                                    {props.processing_period_end} Days
                                </span>
                                <span className="t2">Processing period</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default VisaCard;
