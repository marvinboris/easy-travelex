import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TourCard from "./tour-card";

import { ModelTour } from "@/types";

function TourPackages2() {
    const [tours, setTours] = useState<ModelTour[]>([]);

    useEffect(() => {
        axios.get<ModelTour[]>("/api/tours").then((res) => setTours(res.data));
    }, []);

    return (
        <section className="section TourPackage2 layer_section tour_package">
            <div className="struct">
                <div className="section_header">
                    <div className="titre_section">
                        <h2 className="titre font-bold">Our tours packages</h2>
                        <p className="p">
                            EasyTravelex Agency offers the best and affordable
                            Tours to International Tourists.
                        </p>
                    </div>

                    <div className="contain_btn_contain">
                        <Link to={"/compose-tour"} className="btn_rectangle_v2">
                            Compose your package
                        </Link>
                        <div className="subtitle_text">Coming soon</div>
                    </div>
                </div>

                <div className="visa_type_contain">
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

export default TourPackages2;
