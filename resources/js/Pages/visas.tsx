import Achievements from "../Components/frontend/achievements";
import ApplyVisa from "../Components/frontend/apply-visa";
import Banner from "../Components/frontend/banner";
import ContactSection from "../Components/frontend/contact-section";
import VisaMenu from "../Components/frontend/visa-menu";

const Visas = () => {
    return (
        <>
            <Banner title="Apply for visa" />
            <VisaMenu />
            {/* <ApplyVisa
                title="Get your visa now !"
                description="EasyTravelex Agency offers the best and affordable 
Visas to International Tourists. "
                bigTitle=""
                isSectionHeader={true}
            /> */}
            <Achievements />
            <ContactSection />
        </>
    );
};

export default Visas;
