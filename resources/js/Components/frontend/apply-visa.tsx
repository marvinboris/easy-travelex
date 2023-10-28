import imgGriddot from "../../assets/images/svg/Grid_dots.svg";
import imgbigCircle from "../../assets/images/svg/bigCircleArc.svg";
import caroussel4 from "../../assets/images/caroussels/caroussel4.webp";
import caroussel2 from "../../assets/images/caroussels/caroussel2.webp";
import caroussel3 from "../../assets/images/caroussels/caroussel3.webp";

import VisaCard from "./visa-card";

function SectionHeader(props: {
    title: string;
    description: string;
    bigTitle: string;
}) {
    return (
        <div className="section_header">
            <div className="titre_section ">
                <h2 className="titre ">{props.title}</h2>
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
    return (
        <section
            id="section1"
            className="section layer_section"
            style={{ paddingBottom: "80px" }}
        >
            <div className="aside_deco anime1">
                <img className="imgGriddot" src={imgGriddot} alt={imgGriddot} />
                <div className="lineartext">APPLY FOR YOUR VISA TODAY !</div>
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
                    ></SectionHeader>
                )}

                <div className="visa_type_contain ">
                    <VisaCard
                        img={caroussel4}
                        goTo="/visasapplication/14 Days  visa + insurance to Dubai - UAE "
                        visaDays={14}
                        title="14 Days  visa + insurance to Dubai - UAE "
                        description="This visa gives you 14 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires."
                        price="$ 130 USD"
                        period="4 - 5 Days"
                    ></VisaCard>
                    <VisaCard
                        goTo="/visasapplication/30 Days  visa + insurance to Dubai - UAE"
                        img={caroussel2}
                        visaDays={30}
                        title="30 Days  visa + insurance to Dubai - UAE "
                        description="This visa gives you 30 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires."
                        price="$ 240 USD"
                        period="4 - 7 Days"
                    ></VisaCard>
                    <VisaCard
                        goTo="/visasapplication/90 Days  visa + insurance to Dubai - UAE "
                        img={caroussel3}
                        visaDays={90}
                        title="90 Days  visa + insurance to Dubai - UAE "
                        description="This visa gives you 90 days access in the whole UAE. It comes with insurance. Enjoy your stay and leave before your visa expires."
                        price="$ 520 USD"
                        period="6 - 10 Days"
                    ></VisaCard>
                </div>
            </div>
        </section>
    );
}

export default ApplyVisa;
