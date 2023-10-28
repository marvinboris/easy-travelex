import { Navigate, Route, Routes } from "react-router-dom";

import BackendLayout from "./Layouts/backend";
import FrontendLayout from "./Layouts/frontend";
import Cars from "./Pages/cars";
import ContactUs from "./Pages/contact-us";
import Tours from "./Pages/tours";
import ToursApplication from "./Pages/tours-application";
import ToursCustomBooking from "./Pages/tours-custom-booking";
import UserCars from "./Pages/user/cars";
import UserDashboard from "./Pages/user/dashboard";
import UserFiles from "./Pages/user/files";
import UserTours from "./Pages/user/tours";
import UserSettings from "./Pages/user/settings";
import UserVisas from "./Pages/user/visas";
import UserWebSettings from "./Pages/user/web-settings";
import Visas from "./Pages/visas";
import VisasApplication from "./Pages/visas-application";
import Welcome from "./Pages/welcome";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/user" element={<BackendLayout />}>
                <Route path="/user/visas" element={<UserVisas />} />
                <Route path="/user/tours" element={<UserTours />} />
                <Route path="/user/settings" element={<UserSettings />} />
                <Route
                    path="/user/web-settings"
                    element={<UserWebSettings />}
                />
                <Route path="/user/customer-file" element={<UserFiles />} />
                {/* <Route path="/user/tours/toursapplication/:titleApplication" element={<ToursApplication />} />
      <Route path="/user/toursapplication/:titleApplication" element={<ToursApplication />} />
    <Route path="/user/visasapplication/:titleApplication" element={<VisasApplication />} /> */}
                {/* <Route
      
        path="/user/tourscustombooking"
        element={<ToursCustomBooking />}
      /> */}
                {/* <Route path="/user/contacts" element={<ContactUs />} /> */}
                <Route path="/user/car-rentals" element={<UserCars />} />
                {/* <Route path="/user/composetour" element={<ToursCustomBooking />} /> */}
                <Route index path="/user" element={<UserDashboard />} />
            </Route>

            <Route path="/" element={<FrontendLayout />}>
                <Route path="/visas" element={<Visas />} />
                <Route path="/tours" element={<Tours />} />
                <Route
                    path="/tours/toursapplication/:titleApplication"
                    element={<ToursApplication />}
                />
                <Route
                    path="/toursapplication/:titleApplication"
                    element={<ToursApplication />}
                />
                <Route
                    path="/visasapplication/:titleApplication"
                    element={<VisasApplication />}
                />
                <Route
                    path="/tourscustombooking"
                    element={<ToursCustomBooking />}
                />
                <Route path="/contacts" element={<ContactUs />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/composetour" element={<ToursCustomBooking />} />
                <Route path="/" element={<Welcome />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
