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
                {/* <div className="space_witness" /> */}
                <div className="section_header">
                    <div className="titre_section fromTop">
                        <h2 className="titre font-bold">
                            What customers are saying
                        </h2>
                        <p className="p">
                            Experience today and give comment tomorrow
                        </p>
                    </div>

                    {/* <div className="header_title_shadow ">witness</div> */}
                </div>

                <div className="witness_container">
                    <WitnessItem
                        // image={imgProfile5}
                        name={"Linda Nomhle"}
                        title={"2 months ago"}
                        description="I love this agency!! Fast and efficient"
                    />
                    <WitnessItem
                        // image={imgProfile4}
                        name={"Lissa Irene Mashaka"}
                        title={"3 months ago"}
                        description="Very fast and Seamless service. Highly recommend this agent. Will definitely be using his services for more transactions to come"
                    />
                    <WitnessItem
                        // image={imgProfile3}
                        name={"Loraine Nyasha Ncube"}
                        title={"4 months ago"}
                        description="I had a wonderful experience with you guys…the fears of doing something for the very first time, in my mind I was like what if everything gonna happen the other way around, I was so scared you assured me that am not alone in this and surely it was a great experience going to Oman for my visa extension… thank you, guys… you just awesome"
                    />
                    <WitnessItem
                        // image={imgProfile2}
                        name={"Maranatha Jongwe"}
                        title={"4 months ago"}
                        description="Thumbs up to Easytravelex! The level of professionalism and efficiency is unparalleled. I got my visa before I exited Dubai... There are the best"
                    />
                    <WitnessItem
                        // image={imgProfile1}
                        name={"Mcdy Pfendel"}
                        title={"5 months ago"}
                        description="Efficient and reliable agency. I highly recommend this one."
                    />
                    {/* 3 last  */}
                    {/* <WitnessItem
                        image={imgProfile6}
                        name={"Brian Maverick"}
                        title={"Co-founder - Canada"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    />
                    <WitnessItem
                        image={imgProfile7}
                        name={"Opelina Mc Guire"}
                        title={"Founder -  Ghana"}
                        description="If you are looking further, then you will miss something huge. Try Guide in Dubai please. "
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default Witness;
