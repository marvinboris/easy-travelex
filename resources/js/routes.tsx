import { Navigate, Route, Routes } from "react-router-dom";

import { useAppSelector } from "./hooks";
import { selectAuth } from "./features/auth/authSlice";
import BackendLayout from "./Layouts/backend";
import FrontendLayout from "./Layouts/frontend";
import AuthUserLoginPage from "./Pages/auth/login";
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
    const { token } = useAppSelector(selectAuth);

    return (
        <Routes>
            {token ? (
                <Route path="/admin" element={<BackendLayout />}>
                    <Route path="/admin/visas" element={<UserVisas />} />
                    <Route path="/admin/tours" element={<UserTours />} />
                    <Route path="/admin/settings" element={<UserSettings />} />
                    <Route
                        path="/admin/web-settings"
                        element={<UserWebSettings />}
                    />
                    <Route
                        path="/admin/customer-file"
                        element={<UserFiles />}
                    />
                    {/* <Route path="/admin/tours/toursapplication/:titleApplication" element={<ToursApplication />} />
      <Route path="/admin/toursapplication/:titleApplication" element={<ToursApplication />} />
    <Route path="/admin/visasapplication/:titleApplication" element={<VisasApplication />} /> */}
                    {/* <Route
      
        path="/admin/tourscustombooking"
        element={<ToursCustomBooking />}
      /> */}
                    {/* <Route path="/admin/contacts" element={<ContactUs />} /> */}
                    <Route path="/admin/car-rentals" element={<UserCars />} />
                    {/* <Route path="/admin/compose-tour" element={<ToursCustomBooking />} /> */}
                    <Route index path="/admin" element={<UserDashboard />} />
                </Route>
            ) : (
                <Route path="/login" element={<AuthUserLoginPage />} />
            )}

            <Route path="/" element={<FrontendLayout />}>
                <Route path="/visas" element={<Visas />} />
                <Route path="/tours" element={<Tours />} />
                <Route
                    path="/tour-applications/:slug"
                    element={<ToursApplication />}
                />
                <Route
                    path="/visa-applications/:slug"
                    element={<VisasApplication />}
                />
                <Route path="/contacts" element={<ContactUs />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/compose-tour" element={<ToursCustomBooking />} />
                <Route path="/" element={<Welcome />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
