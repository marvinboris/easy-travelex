import { Link } from "react-router-dom";
import React from "react";

import imgWallet from "../../assets/images/wallet.png";
import imgClock from "../../assets/images/clock.png";

import { ModelTour } from "@/types";

function TourCard(props: ModelTour) {
    return (
        <Link
            to={props.link}
            state={props}
            className="visa_type_contain__visa_card"
        >
            <div className="header_visa_card">
                <div className="img">
                    <img src={props.photo} alt={props.title} />
                </div>

                <div className="contain">
                    <div className="contain__struct">
                        <div className="tour_day_card">
                            <div className="box_card">
                                <span className="number">{props.persons}</span>
                                <span className="text">Persons</span>
                            </div>

                            <div className="detail_btn">
                                <span className="text_btn">Details</span>
                                <span className="btn_details">
                                    <span className="img">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.317 1.3335C9.34563 1.3335 9.3737 1.33591 9.40102 1.34054L9.49226 1.3411C9.62826 1.3411 9.75826 1.39643 9.85293 1.49443L13.2296 5.01243C13.3189 5.1051 13.369 5.22976 13.369 5.35843V11.4691C13.3809 13.1418 12.0783 14.5084 10.4029 14.5764L5.05693 14.5771H4.98426C3.35097 14.5402 2.04104 13.2192 2.00113 11.6019L2.00093 4.3271C2.0396 2.6731 3.4056 1.3411 5.0476 1.3411L9.23297 1.34054C9.26029 1.33591 9.28836 1.3335 9.317 1.3335ZM8.81693 2.34083L5.04893 2.3411C3.94426 2.3411 3.02693 3.23576 3.00093 4.3391V11.4691C2.97626 12.6111 3.87626 13.5518 5.00693 13.5771H10.3829C11.4956 13.5311 12.3769 12.6064 12.369 11.4731L12.3689 5.98883L11.029 5.9895C9.809 5.98616 8.817 4.9915 8.817 3.77283L8.81693 2.34083ZM9.19246 9.7389C9.46846 9.7389 9.69246 9.9629 9.69246 10.2389C9.69246 10.5149 9.46846 10.7389 9.19246 10.7389H5.59246C5.31646 10.7389 5.09246 10.5149 5.09246 10.2389C5.09246 9.9629 5.31646 9.7389 5.59246 9.7389H9.19246ZM7.8292 7.23756C8.1052 7.23756 8.3292 7.46156 8.3292 7.73756C8.3292 8.01356 8.1052 8.23756 7.8292 8.23756H5.59186C5.31586 8.23756 5.09186 8.01356 5.09186 7.73756C5.09186 7.46156 5.31586 7.23756 5.59186 7.23756H7.8292ZM9.81693 2.9015L9.817 3.77283C9.817 4.44216 10.3617 4.9875 11.0303 4.9895L11.8209 4.98883L9.81693 2.9015Z"
                                                fill="#FF9800"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="visa_card_title">
                            <span className="litle_text">
                                Visit {JSON.parse(props.places).length} places
                                in {props.duration} days
                            </span>
                            {props.title}
                        </div>
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
                                <span className="t1">{props.amount} AED</span>
                                <span className="t2">Starting from</span>
                            </div>
                        </div>

                        <div className="border_left"></div>

                        <div className="info_container__item">
                            <div className="icon">
                                <img src={imgClock} alt={imgClock} />
                            </div>
                            <div className="text">
                                <span className="t1">
                                    {" "}
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

export default TourCard;
