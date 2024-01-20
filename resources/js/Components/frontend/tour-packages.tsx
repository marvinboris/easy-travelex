import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import TourCard from "./tour-card";

import { ModelTour } from "@/types";

function TourPackages() {
    const [tours, setTours] = useState<ModelTour[]>([]);

    useEffect(() => {
        axios.get<ModelTour[]>("/api/tours").then((res) => setTours(res.data));
    }, []);

    return (
        <section className="section TourPackage layer_section tour_package">
            <div className="struct">
                <div className="section_header">
                    <div className="titre_section">
                        <h2 className="titre">Our tours packages</h2>
                        <p className="p">
                            EasyTravelex Agency offers the best and affordable
                            Visas to International Tourists.
                        </p>
                    </div>

                    <div className="header_title_shadow ">Our tours</div>

                    <Link className="btn_mordern" to={"/tours"}>
                        <div className="left_bar"></div>
                        <div className="text">View more</div>
                        <svg
                            width="38"
                            height="32"
                            viewBox="0 0 38 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2631 15.4286C11.2631 14.929 11.6344 14.5161 12.1161 14.4507L12.25 14.4417L29.5973 14.4425L23.3302 8.20105C22.944 7.81649 22.9427 7.19166 23.3272 6.80544C23.6768 6.45434 24.225 6.42131 24.612 6.70713L24.7228 6.80244L32.6834 14.7288C32.7343 14.7794 32.7785 14.8343 32.816 14.8922C32.8266 14.9097 32.8374 14.9275 32.8476 14.9457C32.8571 14.9613 32.8656 14.9775 32.8736 14.9939C32.8847 15.0177 32.8956 15.0423 32.9055 15.0675C32.9135 15.0868 32.9202 15.1057 32.9263 15.1246C32.9336 15.1482 32.9407 15.1733 32.9467 15.1988C32.9513 15.2165 32.9548 15.2337 32.958 15.2508C32.9623 15.2764 32.9661 15.3029 32.9687 15.3296C32.971 15.3501 32.9724 15.3703 32.9732 15.3905C32.9734 15.4028 32.9736 15.4157 32.9736 15.4286L32.9732 15.4668C32.9724 15.4862 32.9711 15.5055 32.9692 15.5248L32.9736 15.4286C32.9736 15.4909 32.9679 15.5518 32.9568 15.6109C32.9543 15.625 32.9512 15.6395 32.9479 15.6539C32.9409 15.6836 32.9328 15.7122 32.9234 15.7402C32.9188 15.7542 32.9135 15.7691 32.9078 15.7838C32.8963 15.8135 32.8837 15.8418 32.87 15.8694C32.8636 15.8824 32.8564 15.896 32.8489 15.9094C32.8365 15.9313 32.8238 15.9521 32.8104 15.9724C32.8009 15.9868 32.7904 16.0018 32.7795 16.0165L32.7709 16.0279C32.7443 16.0626 32.7155 16.0955 32.6846 16.1264L32.6834 16.1273L24.7229 24.0549C24.3367 24.4395 23.7119 24.4382 23.3273 24.052C22.9777 23.701 22.947 23.1527 23.2344 22.7669L23.3302 22.6564L29.5947 16.4162L12.25 16.4154C11.7049 16.4154 11.2631 15.9736 11.2631 15.4286Z"
                                fill="#EF6E11"
                            />
                            <circle cx="3" cy="16" r="3" fill="#E08700" />
                        </svg>
                    </Link>
                </div>

                <div className="visa_type_contain ">
                    {tours.map((tour, index) => (
                        <TourCard
                            key={"tour-card-" + tour.id + "-" + index}
                            {...tour}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TourPackages;
