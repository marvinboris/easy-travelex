import { Link } from "react-router-dom";
import React from "react";

import imgContactUs from "../../assets/images/contactUs.png";

function ContactSection() {
    return (
        <section
            className="section layer_section contactSection restSection"
            style={{
                paddingTop: "0px",
            }}
        >
            <div className="struct">
                <h1 className="widthText ">Contact us</h1>

                <div className="section_container section_container_achievements">
                    <div className="text_group_container contact_group_container">
                        <div className="space"></div>
                        <div className="group_title">
                            <h4 className="h4">Contact us anytime</h4>
                            <p>Reach out href us via this channels</p>
                        </div>

                        <div className="contact_container">
                            <div className="container_conctact_card">
                                <div className="item item1">
                                    <div className="item__struct">
                                        <div className="channel">
                                            <div className="ic">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M7.28694 18.3671C7.08627 18.2662 6.86598 18.2315 6.64747 18.2832C5.90454 18.458 4.70587 18.7568 3.83362 18.9762C3.33774 19.101 2.88645 18.6596 3.00151 18.1619C3.21823 17.2219 3.51879 15.9144 3.66149 15.2607C3.70608 15.0574 3.67844 14.8477 3.59014 14.6595C3.06751 13.5403 2.75 12.3015 2.75 11.0002C2.75 5.94775 7.35294 1.91828 12.5722 2.89756C15.8515 3.51294 18.4871 6.14931 19.1024 9.42782C20.0817 14.647 16.0522 19.25 10.9998 19.25C9.7075 19.25 8.41605 18.9379 7.28694 18.3671Z"
                                                        stroke="#2AA000"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7.88409 7.75559C6.61318 9.03274 7.57639 11.0617 9.27096 12.7563C10.9655 14.4509 12.9624 15.382 14.2396 14.1111L14.3573 13.9933C14.8692 13.4823 14.7943 12.6323 14.2013 12.2185C14.0095 12.0856 13.8088 11.9447 13.5956 11.7958C13.1345 11.472 12.504 11.522 12.1053 11.9188L11.8895 12.1329C10.961 11.5799 10.4901 11.0483 9.86313 10.1065L10.0772 9.89076C10.4732 9.49119 10.5231 8.86061 10.2003 8.39952C10.0504 8.18636 9.91043 7.98569 9.77669 7.79394C9.36373 7.20085 8.51375 7.12682 8.00182 7.63786L7.88409 7.75559Z"
                                                        stroke="#2AA000"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="channel_text">
                                                <div className="channel_text__title">
                                                    WhatsApp
                                                </div>
                                                <div className="channel_text__value">
                                                    +971 54 489 5672
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            className="btn_channel"
                                            to={"https://wa.me/+971544895672"}
                                        >
                                            Chat with us
                                        </Link>
                                    </div>
                                </div>
                                <div className="item item2">
                                    <div className="item__struct">
                                        <div className="channel">
                                            <div className="ic">
                                                <svg
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13.157 2.29175C16.5496 2.6685 19.2299 5.34516 19.6103 8.73775"
                                                        stroke="#4A4A4A"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.157 5.53955C14.7804 5.85488 16.0491 7.12447 16.3653 8.74788"
                                                        stroke="#4A4A4A"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M10.1123 11.4331C13.7688 15.0887 14.5984 10.8596 16.9265 13.1862C19.171 15.4301 20.4621 15.8797 17.6173 18.7227C17.2611 19.009 14.9979 22.4532 7.04413 14.5014C-0.910581 6.54875 2.53148 4.28316 2.81782 3.92704C5.66849 1.07611 6.1113 2.37368 8.35582 4.61763C10.683 6.9452 6.4557 7.77746 10.1123 11.4331Z"
                                                        stroke="#4A4A4A"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="channel_text">
                                                <div className="channel_text__title">
                                                    Call now
                                                </div>
                                                <div className="channel_text__value">
                                                    +971 56 558 6512
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            to={"tel:+971508291203"}
                                            className="btn_channel"
                                        >
                                            Chat with us
                                        </Link>
                                    </div>
                                </div>
                                <div className="item item3">
                                    <div className="item__struct">
                                        <div className="channel">
                                            <div className="ic">
                                                <svg
                                                    width={20}
                                                    height={18}
                                                    viewBox="0 0 20 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13 7L9 11L15 17L19 1L1 8L5 10L7 16L10 12"
                                                        stroke="#4A4A4A"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="channel_text">
                                                <div className="channel_text__title">
                                                    Telegram
                                                </div>
                                                <div className="channel_text__value">
                                                    +971 54 489 5672
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            to={"https://t.me/+971544895672"}
                                            className="btn_channel"
                                        >
                                            Chat with us
                                        </Link>
                                    </div>
                                </div>
                                <div className="item item4">
                                    <div className="item__struct">
                                        <div className="channel">
                                            <div className="ic">
                                                <svg
                                                    width={20}
                                                    height={15}
                                                    viewBox="0 0 20 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M13.8054 10.6181C13.8795 12.2975 12.5241 13.7176 10.7783 13.789C10.6497 13.7944 4.3806 13.7818 4.3806 13.7818C2.6432 13.9137 1.12262 12.6652 0.985581 10.9921C0.975256 10.8675 0.978072 4.14085 0.978072 4.14085C0.901104 2.45965 2.25461 1.03591 4.0014 0.961836C4.13186 0.955512 10.3925 0.967256 10.3925 0.967256C12.1384 0.837169 13.6636 2.09468 13.7988 3.77588C13.8083 3.89694 13.8054 10.6181 13.8054 10.6181Z"
                                                        stroke="#4A4A4A"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M13.8083 5.52302L16.8268 3.0526C17.5748 2.44027 18.6968 2.97377 18.6959 3.93902L18.6849 10.6756C18.684 11.6409 17.5611 12.1698 16.8149 11.5574L13.8083 9.08702"
                                                        stroke="#4A4A4A"
                                                        strokeWidth="1.375"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="channel_text">
                                                <div className="channel_text__title">
                                                    Skype
                                                </div>
                                                <div className="channel_text__value">
                                                    easytravelex.group
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            to={"callto:+971544895672"}
                                            className="btn_channel"
                                        >
                                            Video Call
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="image_contact">
                                <img src={imgContactUs} alt={imgContactUs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
