import React from "react";
import imgGriddot from "../../assets/images/svg/Grid_dots.svg";
import caroussel7 from "../../assets/images/caroussels/caroussel7.webp";
import imgCarRental from "../../assets/images/car.png";
import imgCircleRental from "../../assets/images/svg/circleCar.svg";
import Boutons from "./boutons";

function AboutUs() {
    return (
        <section className="section AboutUs layer_section restSection">
            <img src={imgGriddot} alt="" className="grid_dots" />
            <div className="struct">
                <div className="section_container">
                    <div className="image_group_container">
                        <div className="image_container">
                            <img src={caroussel7} alt="" />
                        </div>

                        <img src={imgCarRental} alt="" className="car" />

                        <img
                            src={imgCircleRental}
                            alt=""
                            className="imgCircleRental"
                        />
                    </div>

                    <div className="text_group_container">
                        <h1 className="title "> About Us</h1>
                        <div className="space"></div>
                        <div className="group_title">
                            <h4 className="h4">About us !</h4>
                            <p>What is EasyTravelex Agency ?</p>
                            <div className="sub_bar"></div>
                        </div>

                        <p className="normal_description">
                            <strong>EasyTravelex Agency</strong> is your trusted
                            source for the best and affordable international
                            tourist visas to the United Arab Emirates. Our
                            unwavering commitment to prioritizing our clients
                            and delivering top-notch services sets us apart.
                            Whether you're planning a leisurely holiday or a
                            heartfelt family visit in Dubai or any other UAE
                            city, we're here to make your travel dreams a
                            reality.
                        </p>

                        <div className="space_btn">
                            <Boutons
                                text="Check our cars"
                                isNice={true}
                                isIcon={true}
                            ></Boutons>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
