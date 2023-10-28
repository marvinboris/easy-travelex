import { Link } from "react-router-dom";
import React from "react";

import caroussel4 from "../../assets/images/caroussels/caroussel4.webp";
import caroussel2 from "../../assets/images/caroussels/caroussel2.webp";
import caroussel3 from "../../assets/images/caroussels/caroussel3.webp";

import TourCard from "./tour-card";

function TourPackages2() {
    return (
        <section className="section TourPackage2 layer_section tour_package">
            <div className="struct">
                <div className="section_header">
                    <div className="titre_section">
                        <h2 className="titre">Our tours packages</h2>
                        <p className="p">
                            EasyTravelex Agency offers the best and affordable
                            Visas to International Tourists.
                        </p>
                    </div>

                    <div className="contain_btn_contain">
                        <Link
                            to={"/composetour"}
                            className="btn_rectangle_v2"
                        >
                            Compose your package
                        </Link>
                        <div className="subtitle_text">Coming soon</div>
                    </div>
                </div>

                <div className="visa_type_contain ">
                    <TourCard
                        goTo="toursapplication/Easy Travelex Basic"
                        img={caroussel4}
                        title="Easy Travelex Basic"
                        subTitle="Visit 5 places in 3 days."
                        persons="03"
                        period="4 - 5 Days"
                        price="1,400 AED"
                        description="If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need."
                    ></TourCard>
                    <TourCard
                        goTo="toursapplication/Easy Travelex Plus"
                        img={caroussel2}
                        title="Easy Travelex Plus"
                        subTitle="Visit 10 places in 5 days"
                        persons="05"
                        period="4 - 7 Days"
                        price="2,500 AED"
                        description="If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need."
                    ></TourCard>
                    <TourCard
                        goTo="toursapplication/Easy Travelex Pro"
                        img={caroussel3}
                        title="Easy Travelex Pro"
                        subTitle="Visit 15 places in 7 days"
                        persons="07"
                        period="6 - 10 Days"
                        price="3,500 AED"
                        description="If you are looking for a way to spend your time in the best of ways with a limited budget, this plan gives you access to what you need."
                    ></TourCard>
                </div>
            </div>
        </section>
    );
}

export default TourPackages2;
