import { Link } from "react-router-dom";
import React from "react";

import imgBtnDesign from "../../assets/images/svg/btnDesign.svg";
import imgCircleAchievement from "../../assets/images/svg/circleachievement.svg";

import Boutons from "./boutons";

function Achievements() {
    return (
        <section className="section achievements layer_section restSection">
            <div className="struct">
                <h1 className="widthText ">Our achievements</h1>

                <div className="section_container section_container_achievements">
                    <div className="text_group_container">
                        {/* <div className="space"></div> */}
                        <div className="group_title">
                            <p>
                                {" "}
                                <img
                                    className="after"
                                    src={imgBtnDesign}
                                    alt=""
                                />{" "}
                                OUR EXPERIENCE
                            </p>
                            <h4 className="h4">Our achievements</h4>
                        </div>

                        <p className="normal_description">
                            XYZ Company is a reliable and forward-thinking
                            technology solutions provider that is committed to
                            delivering exceptional products and services. With
                            our vast experience, technical expertise, and
                            customer-centric approach, we are well-equipped to
                            help businesses thrive in the digital age.
                        </p>

                        <Link to={"/contacts"} className="space_btn">
                            <Boutons
                                text="Contact us"
                                isNice={true}
                                isIcon={true}
                            />
                        </Link>
                    </div>

                    <div className="container_achievement_card">
                        <div className="long_container">
                            <div className="achievement_card">
                                <div className="caret_design up"></div>
                                <div className="caret_design down"></div>

                                <div className="achievement_card__struct">
                                    <div className="t1">500+</div>
                                    <div className="tiret"></div>
                                    <div className="description">
                                        Happy customers across the world.
                                    </div>
                                </div>
                            </div>
                            <div className="achievement_card">
                                <div className="caret_design up">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                    >
                                        <path d="M16.0816 12.7639L16.0816 12.7638L16.0773 12.7679C15.7216 13.1127 15.5588 13.6104 15.6396 14.0979L15.6396 14.0979L15.6408 14.1051L16.4557 18.6147C16.4557 18.6147 16.4557 18.6148 16.4557 18.6148C16.4896 18.8035 16.4101 18.995 16.2512 19.1047L16.2511 19.1046L16.2402 19.1125C16.0832 19.2273 15.8728 19.242 15.6991 19.1488L15.6991 19.1488L15.694 19.1462L11.6379 17.0307C11.6372 17.0303 11.6365 17.0299 11.6358 17.0296C11.4249 16.9176 11.193 16.8588 10.9588 16.8521L10.9517 16.8519H10.9445H10.6961H10.6591L10.6225 16.8574C10.4825 16.8782 10.3431 16.9229 10.213 16.9934L6.16013 19.1168C6.05538 19.1686 5.93808 19.1872 5.82314 19.1702C5.55206 19.1152 5.37125 18.8561 5.41404 18.5818L6.22898 14.0767L6.22904 14.0768L6.23034 14.0688C6.31076 13.5795 6.14857 13.0818 5.79534 12.734L5.79254 12.7313L2.48263 9.52313C2.34484 9.38945 2.29772 9.18995 2.36016 9.01033L2.3615 9.00642C2.42462 8.81989 2.58488 8.68431 2.77806 8.65297L7.32122 7.9939C7.83352 7.93718 8.28207 7.62398 8.51251 7.1631L8.51253 7.16311L8.51469 7.15868L10.5189 3.04957C10.5392 3.01149 10.5628 2.97857 10.5882 2.95129L10.6456 2.90667L10.6802 2.87977L10.7096 2.84726C10.7113 2.84529 10.7133 2.84331 10.7154 2.84133L10.7584 2.82555L10.7675 2.8222L10.7765 2.8185L10.8409 2.79199H11.0978C11.2655 2.81629 11.4107 2.91894 11.4886 3.06816L13.5195 7.15924C13.5197 7.1597 13.52 7.16016 13.5202 7.16062C13.7395 7.60781 14.1644 7.91701 14.6537 7.99198L14.6537 7.99199L14.6577 7.99256L19.2135 8.65348L19.2146 8.65363C19.4124 8.68189 19.5784 8.81781 19.6456 9.00582C19.703 9.18737 19.6515 9.38601 19.5115 9.51737L19.5099 9.51886L16.0816 12.7639Z" />
                                    </svg>
                                </div>
                                <div className="caret_design down"></div>

                                <div className="achievement_card__struct">
                                    <div className="t1">4.8</div>
                                    <div className="tiret"></div>
                                    <div className="description">
                                        Positive ratings from users wordwide.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one_container">
                            <div className="achievement_card">
                                <div className="caret_design up"></div>
                                <div className="caret_design down"></div>

                                <div className="achievement_card__struct">
                                    <div className="t1">5+</div>
                                    <div className="tiret"></div>
                                    <div className="description">
                                        Years experience in the UAE market.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img
                            src={imgCircleAchievement}
                            alt=""
                            className="imgCircleRental"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
