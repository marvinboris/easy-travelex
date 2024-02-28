import React from "react";
import Achievements from "../../Components/frontend/achievements";
import ApplyVisa from "../../Components/frontend/apply-visa";
import Banner from "../../Components/frontend/banner";
import ContactSection from "../../Components/frontend/contact-section";
import VisaMenu from "../../Components/frontend/visa-menu";
import VisasContext from "./context";

const Visas = () => {
    const [activeTab, setActiveTab] = React.useState("United Arab Emirates");

    return (
        <VisasContext.Provider value={{ activeTab, setActiveTab }}>
            <Banner title="Apply for visa" />
            <VisaMenu />
            {activeTab === "United Arab Emirates" ? (
                <ApplyVisa
                    title="Get your visa now !"
                    description="EasyTravelex Agency offers the best and affordable 
Visas to International Tourists. "
                    bigTitle=""
                    isSectionHeader={true}
                />
            ) : null}
            <Achievements comingSoon={activeTab !== "United Arab Emirates"} />
            <ContactSection />
        </VisasContext.Provider>
    );
};

export default Visas;
