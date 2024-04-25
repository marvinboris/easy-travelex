import axios from "axios";
import { useEffect, useState } from "react";

import imgGriddot from "../../assets/images/svg/Grid_dots.svg";
import imgbigCircle from "../../assets/images/svg/bigCircleArc.svg";

import VisaCard from "./visa-card";

import { ModelVisa } from "@/types/models/visa";

function SectionHeader(props: {
    title: string;
    description: string;
    bigTitle: string;
}) {
    return (
        <div className="section_header">
            <div className="titre_section ">
                <h2 className="titre font-extrabold">{props.title}</h2>
                <p className="p">{props.description}</p>
            </div>

            <div className="header_title_shadow ">{props.bigTitle}</div>
        </div>
    );
}

function ApplyVisa(props: {
    title: string;
    description: string;
    bigTitle: string;
    isSectionHeader: boolean;
}) {
    const [visas, setVisas] = useState<ModelVisa[]>([]);

    useEffect(() => {
        axios.get<ModelVisa[]>("/api/visas").then((res) => setVisas(res.data));
    }, []);

    return (
        <section
            id="section1"
            className="section layer_section"
            style={{ paddingBottom: "80px" }}
        >
            <div className="aside_deco anime1">
                <img className="imgGriddot" src={imgGriddot} alt={imgGriddot} />
                {/* <div className="lineartext">APPLY FOR YOUR VISA TODAY !</div> */}
            </div>

            <img
                className="imgbigCircle rotatedElemt"
                src={imgbigCircle}
                alt="imgbigCircle"
            />

            <div className="struct">
                {props.isSectionHeader && (
                    <SectionHeader
                        title={props.title}
                        description={props.description}
                        bigTitle={props.bigTitle}
                    />
                )}

                <div className="visa_type_contain">
                    {visas.map((visa, index) => (
                        <VisaCard
                            key={"visa-card-" + visa.id + "-" + index}
                            {...visa}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ApplyVisa;
