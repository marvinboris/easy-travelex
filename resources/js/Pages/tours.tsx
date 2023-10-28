import Banner from "../Components/frontend/banner";
import TourPackages2 from "../Components/frontend/tour-packages-2";
import Achievements from "../Components/frontend/achievements";
import ContactSection from "../Components/frontend/contact-section";

const Tours = () => {
    return (
        <>
            <Banner title="Tours package" data-after="Our tours" />
            <TourPackages2 data-leftSide="" />
            <Achievements />
            <ContactSection />
        </>
    );
};

export default Tours;
