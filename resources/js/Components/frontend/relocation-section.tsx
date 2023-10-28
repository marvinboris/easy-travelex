import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

import imgCheckCircle from "../../assets/images/svg/checkcircle.svg";
import imgLongRightArrow from "../../assets/images/svg/long-right-arrow.svg";
import imgRelocation1 from "../../assets/images/relocation1.webp";
import imgRelocation2 from "../../assets/images/relocation2.jpg";
import imgRelocation3 from "../../assets/images/relocation3.jpg";
import imgCircleRelocation from "../../assets/images/svg/circleRelocation.svg";
import imgBtnDesign from "../../assets/images/svg/btnDesign.svg";

function RelocationSection() {
    function Relocation() {
        const bundle = {
            basic: "Basic",
            plus: "Plus",
            ultra: "Ultra",
        };

        const previewRelocation = {
            basic: imgRelocation1,
            plus: imgRelocation2,
            ultra: imgRelocation3,
        };

        const basicContainer = (
            <div className="relocation_loader_container ">
                <div className="container_item">
                    <div className="descr">
                        This is a stress free package, that gives you peace of
                        mind such if you decide otherwise you can easily go back
                        home.
                    </div>

                    <ul className="list">
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Two way ticket with return to your country
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                60 days visa (Extendable)
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Insurance provided</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Airport pick up by SUV 4x4
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Loaded metro & bus card</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                One (01) full day of city tour
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                30 days shared accommodation
                            </div>
                        </li>
                    </ul>

                    <div className="price">
                        <div className="text" data-after="$1,700 USD">
                            $1,500 USD
                        </div>

                        <div className="price_btn">
                            <img src={imgLongRightArrow} alt="" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
        const plusContainer = (
            <div className="relocation_loader_container">
                <div className="container_item">
                    <div className="descr">
                        This is a stress free package, that gives you peace of
                        mind such if you decide otherwise you can easily go back
                        home.
                    </div>

                    <ul className="list">
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Two way ticket with return to your country
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                60 days visa (Extendable)
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Insurance provided</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Airport pick up by SUV 4x4
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Loaded metro & bus card</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                One (01) full day of city tour
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                30 days shared accommodation
                            </div>
                        </li>
                    </ul>

                    <div className="price">
                        <div className="text" data-after="$5,750 USD">
                            $5,300 USD
                        </div>

                        <div className="price_btn">
                            <img src={imgLongRightArrow} alt="" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        );

        const ultraContainer = (
            <div className="relocation_loader_container">
                <div className="container_item">
                    <div className="descr">
                        This is a stress free package, that gives you peace of
                        mind such if you decide otherwise you can easily go back
                        home.
                    </div>

                    <ul className="list">
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Two way ticket with return to your country
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                60 days visa (Extendable)
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Insurance provided</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                Airport pick up by SUV 4x4
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">Loaded metro & bus card</div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                One (01) full day of city tour
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src={imgCheckCircle} alt="" />{" "}
                            <div className="text">
                                30 days shared accommodation
                            </div>
                        </li>
                    </ul>

                    <div className="price">
                        <div className="text" data-after="$61,700 USD">
                            $542,500 USD
                        </div>

                        <div className="price_btn">
                            <img src={imgLongRightArrow} alt="" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        );

        const [relocationBundle, setRelocationBundle] = useState(bundle.basic);

        const relocation_btn_basic = useRef(null);
        const relocation_btn_plus = useRef(null);
        const relocation_btn_ultra = useRef(null);

        const gsapAnime = () => {
            let animateRelocation = gsap.timeline();
            // Add animations to the timeline

            animateRelocation.from(
                ".relocation_loader_container .descr, .relocation_loader_container .list *, .relocation_loader_container .price",
                {
                    y: 100,
                    x: -15,
                    skewX: 50,
                    opacity: 0,
                    stagger: 0.01,
                    onStart: function () {
                        const relocation_menulinks =
                            document.querySelectorAll<HTMLDivElement>(
                                ".relocation_menu .rectangle_btn"
                            );

                        function desactiverEtReactiverBouton(
                            btn: HTMLDivElement
                        ) {
                            btn.style.pointerEvents = "none";
                        }

                        relocation_menulinks.forEach((link) =>
                            desactiverEtReactiverBouton(link)
                        );
                    },
                    onComplete: function () {
                        const relocation_menulinks =
                            document.querySelectorAll<HTMLDivElement>(
                                ".relocation_menu .rectangle_btn"
                            );

                        function desactiverEtReactiverBouton(
                            btn: HTMLDivElement
                        ) {
                            btn.style.pointerEvents = "all";
                        }

                        relocation_menulinks.forEach((link) =>
                            desactiverEtReactiverBouton(link)
                        );
                        console.log("complete");
                    },
                }
            );

            animateRelocation.resume();
        };

        const handleBasicBundle = () => {
            setRelocationBundle(bundle.basic);
            gsapAnime();
        };

        const handlePlusBundle = () => {
            setRelocationBundle(bundle.plus);
            gsapAnime();
        };

        const handleUltraBundle = () => {
            setRelocationBundle(bundle.ultra);
            gsapAnime();
        };

        let renderValue;

        let imgRelocation;

        switch (relocationBundle) {
            case bundle.basic:
                renderValue = basicContainer;
                imgRelocation = previewRelocation.basic;
                break;
            case bundle.plus:
                renderValue = plusContainer;
                imgRelocation = previewRelocation.plus;
                break;
            case bundle.ultra:
                renderValue = ultraContainer;
                imgRelocation = previewRelocation.ultra;
                console.log(imgRelocation);
                break;

            default:
                renderValue = basicContainer;
                break;
        }

        //Relocation menu fuction
        const handleRelocationMenuClick = (e: MouseEvent) => {
            e.preventDefault();
            // console.log("handleLinkClick this", e.currentTarget);
            const relocation_menulinks = document.querySelectorAll(
                ".relocation_menu .rectangle_btn"
            );
            relocation_menulinks.forEach((link) =>
                link.classList.remove("active")
            );
            const currentLink = e.currentTarget;
            (currentLink as unknown as HTMLElement)?.classList.add("active");
        };

        const relocation_menulinks = document.querySelectorAll<HTMLDivElement>(
            ".relocation_menu .rectangle_btn"
        );
        relocation_menulinks.forEach((link) =>
            link.addEventListener("click", handleRelocationMenuClick)
        );
        //Relocation menu fuction

        useEffect(() => {
            console.log("goog");

            let relocationCtx = gsap.context(() => {});

            return () => {
                relocationCtx.revert();
            };
        }, []);

        return (
            <div className="relocation_container">
                <div className="relocation_info">
                    <div className="relocation_menu">
                        <div
                            onClick={handleBasicBundle}
                            ref={relocation_btn_basic}
                            className={`rectangle_btn ${
                                relocationBundle === bundle.basic
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <span>Relocation</span> <span>Basic</span>
                            <img src={imgBtnDesign} alt={imgBtnDesign} />
                        </div>
                        <div
                            onClick={handlePlusBundle}
                            ref={relocation_btn_plus}
                            className={`rectangle_btn ${
                                relocationBundle === bundle.plus ? "active" : ""
                            }`}
                        >
                            <span>Relocation</span> <span>Plus</span>{" "}
                            <img src={imgBtnDesign} alt={imgBtnDesign} />
                        </div>
                        <div
                            onClick={handleUltraBundle}
                            ref={relocation_btn_ultra}
                            className={`rectangle_btn ${
                                relocationBundle === bundle.ultra
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <span>Relocation</span> <span>Ultra</span>{" "}
                            <img src={imgBtnDesign} alt={imgBtnDesign} />
                        </div>
                    </div>

                    {renderValue}
                </div>

                <div className="relocation_image">
                    <div className="img">
                        <img
                            src={previewRelocation.basic}
                            alt={previewRelocation.basic}
                        />
                    </div>

                    <img
                        className="imgCircleRelocation"
                        src={imgCircleRelocation}
                        alt={imgCircleRelocation}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="section layer_section relocation">
            <div className="struct">
                <div className="section_header">
                    <div className="titre_section ">
                        <h2 className="titre ">Travel & Experience</h2>
                        <p className="p">Anything, anywhere, at anytime</p>
                    </div>

                    <div className="header_title_shadow ">Relocations</div>
                </div>

                <Relocation></Relocation>
            </div>
        </div>
    );
}

export default RelocationSection;
