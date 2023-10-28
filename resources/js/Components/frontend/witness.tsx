import imgRedcircle from "../../assets/images/svg/redCircle.svg";
import imgTourMessage from "../../assets/images/svg/tourMessage.svg";
import imgMap from "../../assets/images/svg/redMap.svg";
import imgCircle from "../../assets/images/svg/circle.svg";
import imgProfile1 from "../../assets/images/profiles/profile1.png";
import imgProfile2 from "../../assets/images/profiles/profile2.png";
import imgProfile3 from "../../assets/images/profiles/profile3.png";
import imgProfile4 from "../../assets/images/profiles/profile4.png";
import imgProfile5 from "../../assets/images/profiles/profile5.png";
import imgProfile6 from "../../assets/images/profiles/profile6.png";
import imgProfile7 from "../../assets/images/profiles/profile7.png";

import WitnessItem from "./witness-item";

function Witness() {
    return (
        <section className="section layer_section  witness">
            <img
                className="imgRedcircle"
                src={imgRedcircle}
                alt={imgRedcircle}
            />

            <div className="imgLeft">
                <img src={imgMap} alt={imgMap} className="map" />
                <img
                    src={imgTourMessage}
                    alt={imgTourMessage}
                    className="tour"
                />
            </div>

            <img src={imgCircle} alt="" className="imgBigCircle" />

            <div className="struct">
                {/* <div className="space_witness"></div> */}
                <div className="section_header">
                    <div className="titre_section fromTop">
                        <h2 className="titre">What customers are saying</h2>
                        <p className="p">
                            Experience today and give comment tomorrow
                        </p>
                    </div>

                    {/* <div className="header_title_shadow ">witness</div> */}
                </div>

                <div className="witness_container">
                    <WitnessItem
                        image={imgProfile1}
                        name={"Stephy James"}
                        title={"Manager - USA"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    <WitnessItem
                        image={imgProfile2}
                        name={"Jaenning Felicia"}
                        title={"Founder - UAE"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    <WitnessItem
                        image={imgProfile3}
                        name={"Capo Paalo"}
                        title={"Founder - Bruxells"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    <WitnessItem
                        image={imgProfile4}
                        name={"Chenna Malone"}
                        title={"Manager - Cameroon"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    {/* 3 last  */}
                    <WitnessItem
                        image={imgProfile5}
                        name={"Maddy Mc Heina"}
                        title={"Manager & Founder - CM"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    <WitnessItem
                        image={imgProfile6}
                        name={"Brian Maverick"}
                        title={"Co-founder - Canada"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                    <WitnessItem
                        image={imgProfile7}
                        name={"Opelina Mc Guire"}
                        title={"Founder -  Ghana"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    ></WitnessItem>
                </div>
            </div>
        </section>
    );
}

export default Witness;
