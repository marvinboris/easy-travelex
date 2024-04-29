import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import caroussel1 from "../../assets/images/caroussels/caroussel1.webp";
import caroussel2 from "../../assets/images/caroussels/caroussel2.webp";
import caroussel3 from "../../assets/images/caroussels/caroussel3.webp";
import caroussel4 from "../../assets/images/caroussels/caroussel4.webp";
import caroussel5 from "../../assets/images/caroussels/caroussel5.webp";
import caroussel6 from "../../assets/images/caroussels/caroussel6.webp";
import caroussel7 from "../../assets/images/caroussels/caroussel7.webp";
import imgTrouSVG from "../../assets/images/svg/trou_header.svg";
import imgBagAfter from "../../assets/images/svg/bag_after.svg";
import imgLayerTexture from "../../assets/images/svg/layerTexture.svg";
import imgDocumentAfter from "../../assets/images/svg/document_after.svg";
import imgImgAfter from "../../assets/images/svg/image_after.svg";
import imgCircleArc from "../../assets/images/svg/circle_arc.svg";
import arrowDown from "../../assets/images/svg/Arrow-down.svg";

import Boutons from "./boutons";

const carousselImages = [
    caroussel5,
    caroussel2,
    caroussel3,
    caroussel4,
    caroussel5,
    caroussel6,
    caroussel7,
];

function Carousel() {
    const navigate = useNavigate();

    useEffect(() => {
        let images = document.querySelectorAll(".caroussel .images .img");
        let currentIndex = 0;
        let showNextImageInterval: NodeJS.Timeout;

        function showNextImage() {
            images.forEach((image, index) => {
                // console.log("image", image);
                image.classList.remove("active");
            });
            currentIndex = (currentIndex + 1) % images.length; // Passage à l'image suivante (en boucle)
            images[currentIndex].classList.add("active"); // Ajouter la classe "active" à la nouvelle image
        }

        // Démarrez une minuterie pour changer les images toutes les 2 secondes (ajustez selon vos besoins)
        showNextImageInterval = setInterval(showNextImage, 8000);
        return () => {
            clearInterval(showNextImageInterval);
        };
    }, []);

    return (
        <section className="section caroussel">
            <div className="images">
                {carousselImages.map((image, index) => (
                    //{`img ${index === 0 ? "active" : ""}`}
                    <div
                        className={`img ${index === 0 ? "active" : ""}`}
                        key={index}
                    >
                        <img src={image} alt={`caroussel${index}`} />
                    </div>
                ))}
            </div>

            {/* decoration */}
            <img
                className="imgLayerTexture"
                src={imgLayerTexture}
                alt="imgLayerTexture"
            />
            <img
                className="imgCircleArc"
                src={imgCircleArc}
                alt="imgCircleArc"
            />
            {/* decoration */}

            <div className="text_carousel">
                <div className="intro">
                    <h4>Welcome to</h4>
                    <h1 className="revelElm">
                        The best visa service provider in the UAE.
                    </h1>
                    <p>
                        Your bus stop for Tourist Visa, Visa change, freelance
                        Visa, flights & Hotel reservation.
                    </p>

                    <div className="tags_destinations">
                        {(function () {
                            const destination = [
                                "United Arab Emirates",
                                "Saudi  Arabia",
                                "Zimbabwe",
                            ];
                            return destination.map((item, index) => (
                                <div className="item" key={index}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2462 2.00017C13.832 2.00017 16.7494 4.93961 16.7494 8.55301C16.7494 12.9949 11.6604 17.3713 10.2462 17.3713C8.83208 17.3713 3.74304 12.9949 3.74304 8.55301C3.74304 4.93961 6.66041 2.00017 10.2462 2.00017ZM10.2462 3.18256C7.31231 3.18256 4.92544 5.59229 4.92544 8.55301C4.92544 12.3201 9.35864 15.9903 10.2462 16.1858C11.1338 15.9895 15.567 12.3193 15.567 8.55301C15.567 5.59229 13.1802 3.18256 10.2462 3.18256ZM10.247 5.94149C11.6596 5.94149 12.8089 7.09078 12.8089 8.50414C12.8089 9.91671 11.6596 11.0652 10.247 11.0652C8.83444 11.0652 7.68516 9.91671 7.68516 8.50414C7.68516 7.09078 8.83444 5.94149 10.247 5.94149ZM10.247 7.12389C9.48634 7.12389 8.86755 7.74268 8.86755 8.50414C8.86755 9.26482 9.48634 9.88282 10.247 9.88282C11.0077 9.88282 11.6265 9.26482 11.6265 8.50414C11.6265 7.74268 11.0077 7.12389 10.247 7.12389Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <div className="text">{item}</div>
                                </div>
                            ));
                        })()}
                    </div>

                    <div className="intro_actions">
                        <Boutons
                            onClick={() => navigate("/visas")}
                            text="Apply for visa"
                            isIcon
                        ></Boutons>

                        <a href="https://www.tiktok.com/@easytravelex">
                            <div className="btn_video_contain">
                                <div className="bnt_video">
                                    <div className="layer layer1">
                                        <div className="layer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 25 25"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4.07016 12.8589V9.29974C4.07016 4.88077 7.19943 3.0712 11.0285 5.28068L14.1178 7.06026L17.2071 8.83985C21.0362 11.0493 21.0362 14.6685 17.2071 16.878L14.1178 18.6575L11.0285 20.4371C7.19943 22.6466 4.07016 20.837 4.07016 16.4181V12.8589Z"
                                                    stroke="white"
                                                    strokeWidth="1.49965"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="text_btn_video">
                                    Watch Video
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contain_card caroussel_card">
                    {/* decoration svg */}
                    <img
                        className="imgImgAfter decoration"
                        src={imgImgAfter}
                        alt="imgImgAfter"
                    />
                    <img
                        className="imgDocumentAfter decoration"
                        src={imgDocumentAfter}
                        alt="imgDocumentAfter"
                    />
                    <img
                        className="imgBagAfter decoration"
                        src={imgBagAfter}
                        alt="imgBagAfter"
                    />
                    {/* decoration svg */}

                    <img className="imgTrouSVG" src={imgTrouSVG} alt="svg" />
                    <div className="contain_card_text">
                        <div className="contain_card_text__struct">
                            <h4 className="revelElm !font-extrabold !text-[32px] leading-tight">
                                Get your visa in few steps now !
                            </h4>
                            <div className="bar bar_width !mt-5" />
                            <p className="p_normal !text-lg">
                                We made it more easier for you in order to
                                provide you with the best service, our system
                                has been optimisez to make sure we give you
                                satisfactory visa service. Please select your
                                option below and proceed.
                            </p>

                            <div>
                                <div
                                    className="btn_card cta"
                                    onClick={() => navigate("/visas")}
                                >
                                    <div className="btn_text ">
                                        Apply for visa
                                    </div>
                                    <div className="btn_ico">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.4025 14.3858C20.781 14.4142 21.0642 14.745 21.0358 15.1235L20.8616 17.4229C20.7177 19.3199 19.1167 20.8055 17.2151 20.8055H6.58423C4.68259 20.8055 3.08155 19.3199 2.93767 17.4229L2.76354 15.1235C2.73513 14.745 3.01923 14.4142 3.39773 14.3858C3.77805 14.372 4.10614 14.6405 4.13547 15.0199L4.30868 17.3184C4.39849 18.5025 5.39743 19.4308 6.58423 19.4308H17.2151C18.4019 19.4308 19.4017 18.5025 19.4906 17.3184L19.6647 15.0199C19.6941 14.6405 20.0304 14.3711 20.4025 14.3858ZM13.0821 2.71465C14.4594 2.71465 15.6005 3.74682 15.7724 5.0782L17.5773 5.079C19.4982 5.079 21.0599 6.64522 21.0599 8.5716V11.7233C21.0599 11.968 20.9297 12.1934 20.7199 12.3162C18.4578 13.6409 15.5922 14.4136 12.5868 14.5167L12.5872 16.165C12.5872 16.5445 12.2792 16.8524 11.8998 16.8524C11.5204 16.8524 11.2125 16.5445 11.2125 16.165L11.2119 14.5169C8.20954 14.4148 5.34377 13.6419 3.07999 12.3162C2.86921 12.1934 2.73999 11.968 2.73999 11.7233V8.56244C2.73999 6.64155 4.30621 5.079 6.23167 5.079L8.02728 5.0782C8.19915 3.74682 9.34024 2.71465 10.7176 2.71465H13.0821ZM17.5773 6.45368H6.23167C5.06411 6.45368 4.11467 7.39946 4.11467 8.56244V11.3228C6.29006 12.5048 9.03256 13.1526 11.8871 13.1539L11.8998 13.1527L11.91 13.153L12.3464 13.1485C15.0461 13.0842 17.6214 12.4437 19.6852 11.3228V8.5716C19.6852 7.40312 18.7403 6.45368 17.5773 6.45368ZM13.0821 4.08933H10.7176C10.1005 4.08933 9.57961 4.50931 9.42573 5.07843H14.3739C14.22 4.50931 13.6991 4.08933 13.0821 4.08933Z"
                                                fill="white"
                                                fillOpacity="0.6"
                                            />
                                        </svg>
                                    </div>

                                    <div className="hoverlay" />
                                </div>
                                <div className="btn_card margin_btn">
                                    <div className="btn_text black">
                                        Our tour packages
                                    </div>
                                    <div className="hoverlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#section1" className="scroll_down">
                <img src={arrowDown} alt={arrowDown} />
            </a>
        </section>
    );
}

export default Carousel;
