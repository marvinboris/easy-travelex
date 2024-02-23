import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Footer() {
    function handleClickLogo() {
        (
            document.querySelector(".GoHome") as HTMLDivElement | undefined
        )?.click();
    }

    return (
        <footer
            className="footer section layer_section"
            style={{
                paddingBottom: "0px",
            }}
        >
            <div className="struct">
                <div className="footer_container">
                    <div className="footer_item">
                        <div className="logo_footer">
                            <img
                                onClick={handleClickLogo}
                                src={logo}
                                alt="logo Easy Travelex"
                            />
                        </div>

                        <p className="footer_description">
                            Qasimi Al waad Muweila Building 3 - Office 2003
                            Sharjah - United Arab Emirates
                        </p>
                    </div>

                    <div className="footer_item footer_itel_margin">
                        <div className="footer_item__title">
                            Important links
                        </div>

                        <ul className="menu_list">
                            <li>
                                <Link
                                    className={"menu_list_item"}
                                    to={"/contacts"}
                                >
                                    - Contact
                                </Link>
                            </li>
                            <li>
                                <Link className={"menu_list_item"} to={"/#"}>
                                    - Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link className={"menu_list_item"} to={"/#"}>
                                    - Privacy policies
                                </Link>
                            </li>
                            <li>
                                <Link className={"menu_list_item"} to={"/#"}>
                                    - Projects
                                </Link>
                            </li>
                            <li>
                                <Link className={"menu_list_item"} to={"/#"}>
                                    - FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_item footer_itel_margin">
                        <div className="footer_item__title">Contacts us</div>
                        <div className="contacts">
                            <a
                                href="mailto:contact@easytravelex.ae"
                                className="contact_item"
                            >
                                <div className="ico">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.8824 1.66699C16.6574 1.66699 18.7499 3.93116 18.7499 6.93366V12.657C18.7499 14.1937 18.2066 15.582 17.2191 16.567C16.3333 17.4495 15.1841 17.917 13.8958 17.917H5.68492C4.39909 17.917 3.25075 17.4503 2.36409 16.567C1.37659 15.582 0.833252 14.1937 0.833252 12.657V6.93366C0.833252 3.93116 2.92575 1.66699 5.70075 1.66699H13.8824ZM13.8824 2.91699H5.70075C3.60492 2.91699 2.08325 4.60616 2.08325 6.93366V12.657C2.08325 13.8595 2.49659 14.9337 3.24659 15.6812C3.89325 16.327 4.73742 16.667 5.68742 16.667H13.8824C13.8841 16.6653 13.8908 16.667 13.8958 16.667C14.8466 16.667 15.6899 16.327 16.3366 15.6812C17.0874 14.9337 17.4999 13.8595 17.4999 12.657V6.93366C17.4999 4.60616 15.9783 2.91699 13.8824 2.91699ZM15.1958 6.77433C15.4133 7.04183 15.3724 7.43516 15.1049 7.65349L11.4016 10.6635C10.9333 11.0352 10.3733 11.221 9.81409 11.221C9.25659 11.221 8.70075 11.0368 8.23575 10.6685L4.49825 7.65516C4.22909 7.43849 4.18742 7.04433 4.40325 6.77599C4.62075 6.50849 5.01409 6.46599 5.28242 6.68183L9.01658 9.69182C9.48575 10.0635 10.1466 10.0635 10.6191 9.68849L14.3158 6.68349C14.5841 6.46433 14.9774 6.50599 15.1958 6.77433Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="value">
                                    {" "}
                                    contact@easytravelex.ae
                                </div>
                            </a>

                            <a
                                href="tel:+971544895672"
                                className="contact_item"
                            >
                                <div className="ico">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.63292 4.2171C3.63458 4.2171 3.59292 4.26043 3.54042 4.3121C3.33875 4.50793 2.92125 4.91543 2.91704 5.76793C2.91042 6.96043 3.69458 9.1746 7.47042 12.9496C11.2287 16.7063 13.4396 17.4996 14.6346 17.4996H14.6521C15.5046 17.4954 15.9113 17.0771 16.1079 16.8763C16.1679 16.8146 16.2162 16.7696 16.2504 16.7413C17.0804 15.9063 17.5054 15.2846 17.5013 14.8863C17.4954 14.4796 16.9896 13.9988 16.2904 13.3338C16.0679 13.1221 15.8262 12.8921 15.5712 12.6371C14.9104 11.9779 14.5829 12.0904 13.8629 12.3438C12.8671 12.6929 11.5004 13.1679 9.37708 11.0438C7.25042 8.91877 7.72625 7.55377 8.07458 6.55793C8.32625 5.83793 8.44125 5.5096 7.77958 4.84793C7.52042 4.5896 7.28792 4.3446 7.07375 4.1196C6.41292 3.4246 5.93625 2.9221 5.53208 2.91627H5.52542C5.12625 2.91627 4.50625 3.34293 3.62875 4.22043C3.63125 4.21793 3.63292 4.2171 3.63292 4.2171ZM14.6354 18.7496C12.5588 18.7496 9.85125 17.0963 6.58708 13.8338C3.31042 10.5579 1.65458 7.8421 1.66701 5.76127C1.67458 4.38627 2.39542 3.6821 2.66625 3.41793C2.68042 3.40043 2.72875 3.35293 2.74542 3.33627C3.94042 2.14043 4.74625 1.6571 5.54792 1.66614C6.47875 1.67877 7.14125 2.37543 7.97958 3.25793C8.18708 3.47627 8.41208 3.71377 8.66292 3.96377C9.87958 5.18043 9.53292 6.17293 9.25458 6.9696C8.95125 7.83877 8.68875 8.58877 10.2604 10.1604C11.8337 11.7321 12.5837 11.4696 13.4496 11.1638C14.2471 10.8854 15.2371 10.5371 16.4554 11.7538C16.7021 12.0004 16.9363 12.2229 17.1521 12.4288C18.0387 13.2713 18.7388 13.9371 18.7506 14.8704C18.7604 15.6663 18.2771 16.4771 17.0837 17.6713L16.5554 17.3129L17.0021 17.7496C16.7379 18.0204 16.0346 18.7421 14.6587 18.7496H14.6354Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="value">+971 54 489 5672</div>
                            </a>

                            <a
                                href="tel:+971553733678"
                                className="contact_item"
                            >
                                <div className="ico">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    ></svg>
                                </div>
                                <div className="value">+971 55 373 3678</div>
                            </a>

                            <a
                                href="tel:+971557617301"
                                className="contact_item"
                            >
                                <div className="ico">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    ></svg>
                                </div>
                                <div className="value">+971 55 761 7301</div>
                            </a>

                            <a
                                href="tel:+971556974097"
                                className="contact_item"
                            >
                                <div className="ico">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    ></svg>
                                </div>
                                <div className="value">+971 55 697 4097</div>
                            </a>
                        </div>
                        <div className="margin_contain"></div>
                        <div className="footer_item__title title_margin_contain">
                            Get started today
                        </div>

                        <form className="subscribe">
                            <div className="subscribe__struct">
                                <div className="input_containt">
                                    <div className="ico">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.8824 1.66699C16.6574 1.66699 18.7499 3.93116 18.7499 6.93366V12.657C18.7499 14.1937 18.2065 15.582 17.219 16.567C16.3332 17.4495 15.184 17.917 13.8957 17.917H5.68485C4.39902 17.917 3.25069 17.4503 2.36402 16.567C1.37652 15.582 0.833187 14.1937 0.833187 12.657V6.93366C0.833187 3.93116 2.92569 1.66699 5.70069 1.66699H13.8824ZM13.8824 2.91699H5.70069C3.60485 2.91699 2.08319 4.60616 2.08319 6.93366V12.657C2.08319 13.8595 2.49652 14.9337 3.24652 15.6812C3.89319 16.327 4.73735 16.667 5.68735 16.667H13.8824C13.884 16.6653 13.8907 16.667 13.8957 16.667C14.8465 16.667 15.6899 16.327 16.3365 15.6812C17.0874 14.9337 17.4999 13.8595 17.4999 12.657V6.93366C17.4999 4.60616 15.9782 2.91699 13.8824 2.91699ZM15.1957 6.77433C15.4132 7.04183 15.3724 7.43516 15.1049 7.65349L11.4015 10.6635C10.9332 11.0352 10.3732 11.221 9.81402 11.221C9.25652 11.221 8.70069 11.0368 8.23569 10.6685L4.49819 7.65516C4.22902 7.43849 4.18735 7.04433 4.40319 6.77599C4.62069 6.50849 5.01402 6.46599 5.28235 6.68183L9.01652 9.69182C9.48569 10.0635 10.1465 10.0635 10.619 9.68849L14.3157 6.68349C14.584 6.46433 14.9774 6.50599 15.1957 6.77433Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <button type="submit">
                                    <div className="bt">Subscribe</div>
                                    <div className="bi">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            viewBox="0 0 18 18"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.21535 10.892L10.6706 14.8753C10.778 15.0499 10.9458 15.0479 11.0137 15.0385C11.0815 15.0291 11.2446 14.9875 11.3037 14.7894L14.3739 4.41995C14.4276 4.23667 14.3289 4.11179 14.2846 4.06748C14.2416 4.02317 14.1188 3.9285 13.9409 3.97886L3.56404 7.01752C3.36732 7.07526 3.32435 7.24042 3.31495 7.30823C3.30555 7.37738 3.30287 7.54858 3.47676 7.65802L7.5057 10.1777L11.0654 6.58045C11.2607 6.38307 11.5796 6.38105 11.7777 6.57642C11.9757 6.77179 11.9771 7.09137 11.7817 7.28876L8.21535 10.892ZM10.9613 16.0496C10.494 16.0496 10.0657 15.8119 9.81323 15.4037L7.21029 11.1801L2.94301 8.51134C2.48312 8.22332 2.24276 7.71038 2.31728 7.17127C2.39114 6.63215 2.76107 6.20381 3.28071 6.0514L13.6575 3.01274C14.1349 2.8731 14.6465 3.00536 14.9983 3.35582C15.3501 3.70964 15.481 4.2266 15.3387 4.70596L12.2685 15.0747C12.1147 15.5964 11.685 15.965 11.1473 16.0368C11.0842 16.0449 11.0231 16.0496 10.9613 16.0496Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="footer_item">
                        <div className="footer_item__title">
                            Find us on Gmaps
                        </div>

                        <div className="map_card">
                            <iframe
                                title="map_card"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.065637066178!2d55.3068481!3d25.2447915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f0d379c0a5%3A0xb83ef61954b1640e!2sEasy%20Travelex%20Agency!5e0!3m2!1sfr!2scm!4v1694992119440!5m2!1sfr!2scm"
                                style={{
                                    border: 0,
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="signSite">
                <div className="struct">
                    <div className="signSite_container">
                        <div className="text">
                            Copyright 2023 |{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://easytravelex.com"
                            >
                                Easy Travelex
                            </a>{" "}
                            . All Rights Reserved
                        </div>
                        <div className="socials">
                            <div className="social">
                                <svg
                                    width={10}
                                    height={16}
                                    viewBox="0 0 10 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.96093 1H6.86093C5.93241 1 5.04248 1.37081 4.38635 2.02162C3.72944 2.68 3.36093 3.56919 3.36093 4.5V6.6H1.26093V9.4H3.36093V15H6.16093V9.4H8.96093V6.6H6.16093V4.5C6.16093 4.31081 6.23435 4.136 6.36603 4.00281C6.49693 3.87719 6.6755 3.8 6.86093 3.8H8.96093V1Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="social">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.83048 1H11.3908C13.6838 1 15.111 2.6187 15.111 4.90941V11.0906C15.111 13.3813 13.6838 15 11.3901 15H4.83048C2.53751 15 1.11102 13.3813 1.11102 11.0906V4.90941C1.11102 2.6187 2.54432 1 4.83048 1Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.99013 5.53027C6.4857 5.53027 5.26581 6.75016 5.26581 8.25462C5.26581 9.759 6.4857 10.9789 7.99013 10.9789C9.49459 10.9789 10.7145 9.759 10.7145 8.25462C10.7145 6.75016 9.49459 5.53027 7.99013 5.53027Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.8958 4.39554V4.44921M12.1151 4.40722C12.1151 4.52933 12.0163 4.6281 11.8942 4.6281C11.7721 4.6281 11.6725 4.52933 11.6725 4.40722C11.6725 4.28511 11.7721 4.18555 11.8942 4.18555C12.0163 4.18555 12.1151 4.28511 12.1151 4.40722Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="social">
                                <svg
                                    width={14}
                                    height={16}
                                    viewBox="0 0 14 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.54865 5.93103C3.04454 5.93103 1.01416 7.95613 1.01416 10.4655C1.01416 12.9749 3.04454 15 5.54865 15C8.05279 15 10.0831 12.9749 10.0831 10.4655V5.42248C10.0831 5.42248 11.6996 6.59316 13.2077 6.18984V3.66984C11.0434 3.46552 10.1861 1.7 9.95298 1H7.8431V10.4019C7.8431 11.5635 6.90324 12.5019 5.74388 12.5019C4.58379 12.5019 3.64389 11.5635 3.64389 10.4019C3.64389 9.31219 4.47027 8.42 5.52897 8.31251C5.52897 7.62083 5.54865 5.93103 5.54865 5.93103Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="social">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.73795 1.19661C10.0029 0.980174 11.9085 2.75552 11.9085 4.97584C11.9085 8.29874 12.0734 9.96062 15.1111 11.2902L15.1098 11.2908C13.7397 11.895 13.5777 11.9664 13.0254 13.1034C12.8816 13.4 12.5941 13.6173 12.2649 13.6437C10.32 13.8004 9.54738 14.819 8.11105 14.819C6.67551 14.819 5.90283 13.8004 3.95797 13.6437C3.62878 13.6173 3.34121 13.4 3.19743 13.1034C2.64514 11.9663 2.48314 11.8949 1.11214 11.2907L1.11105 11.2902C4.09797 9.98333 4.3076 8.35552 4.3144 5.14309C4.31819 3.15963 5.76284 1.38504 7.73795 1.19661Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.92987 5.76953C2.73809 6.22737 3.46761 6.95385 4.15852 7.80971"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.2954 5.76953C13.4872 6.22737 12.7578 6.95385 12.0668 7.80971"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="social">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.73826 14.2508C4.568 14.1653 4.38108 14.1358 4.19568 14.1797C3.56532 14.328 2.54826 14.5816 1.80817 14.7677C1.38742 14.8736 1.00451 14.499 1.10213 14.0768C1.28602 13.2792 1.54104 12.1698 1.66212 11.6151C1.69996 11.4426 1.6765 11.2647 1.60158 11.105C1.15813 10.1554 0.888733 9.10429 0.888733 8.00016C0.888733 3.71325 4.79426 0.294298 9.2227 1.1252C12.0052 1.64734 14.2414 3.88426 14.7635 6.66603C15.5944 11.0945 12.1755 15 7.88858 15C6.79207 15 5.69629 14.7352 4.73826 14.2508Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.24492 5.24622C4.16657 6.32987 4.98384 8.05141 6.42165 9.48921C7.85945 10.9271 9.55377 11.7171 10.6374 10.6388L10.7373 10.5388C11.1717 10.1052 11.1082 9.38406 10.6049 9.03297C10.4422 8.92019 10.272 8.80065 10.0911 8.67426C9.69983 8.39955 9.1648 8.44194 8.82654 8.77864L8.64345 8.96033C7.85564 8.49109 7.4561 8.04006 6.9241 7.24097L7.10571 7.05788C7.44171 6.71885 7.4841 6.18381 7.21017 5.79258C7.083 5.61172 6.96423 5.44146 6.85075 5.27876C6.50037 4.77553 5.77917 4.71272 5.34481 5.14633L5.24492 5.24622Z"
                                        stroke="white"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
