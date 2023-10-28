import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import imgLogo from "../../../assets/images/logo.png";

import CarRentals from "./nav-items/car-rentals";
import CustomerFile from "./nav-items/customer-file";
import Dashboard from "./nav-items/dashboard";
import Tours from "./nav-items/tours";
import VisaApplications from "./nav-items/visa-applications";
import WebSettings from "./nav-items/web-settings";

export default function AsideMenu() {
  const extend_menu = useRef<HTMLDivElement>(null);
  const btn_extend_menu = useRef<HTMLDivElement>(null);

  const handleClickBtnExtendMenu = () => {
    const element = extend_menu.current;
    const svg = btn_extend_menu.current?.querySelector(".text svg") as
      | SVGSVGElement
      | undefined;

    if (element?.classList.contains("active_extend_menu")) {
      if (svg) svg.style.transform = "rotate(0deg)";
    } else {
      if (svg) svg.style.transform = "rotate(-180deg)";
    }

    element?.classList.toggle("active_extend_menu");
  };

  useEffect(() => {
    const temp__btn_extend_menu = btn_extend_menu.current;
    temp__btn_extend_menu?.addEventListener(
      "click",
      handleClickBtnExtendMenu,
      false
    );
    return () => {
      temp__btn_extend_menu?.removeEventListener(
        "click",
        handleClickBtnExtendMenu,
        true
      );
    };
  }, []);

  return (
    <aside className="aside_menu">
      <div className="aside_menu__struct">
        <div className="logo">
          {" "}
          <img src={imgLogo} alt="" />
        </div>

        <div className="menu">
          <Dashboard />
          <VisaApplications />
          <Tours />
          <CarRentals />
          <CustomerFile />
          <WebSettings />

          <div ref={btn_extend_menu} className="menu_item menu_item_settings">
            <div className="menu_item__struct settings">
              <div className="text ">
                <div className="t">Settings</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                >
                  <path
                    d="M14.6 1.45837L9.16669 6.89171C8.52502 7.53337 7.47502 7.53337 6.83336 6.89171L1.40002 1.45837"
                    stroke="#6F6D6D"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <svg
                className="setting"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7105 19.5961C14.708 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6235 17.6831C16.9451 17.6917 17.2596 17.7797 17.5388 17.9394C18.4516 18.4653 19.6178 18.1543 20.1475 17.2437L20.8066 16.1453C21.0617 15.7075 21.1317 15.186 21.0011 14.6963C20.8706 14.2067 20.5502 13.7893 20.1109 13.5366C19.6717 13.2839 19.3513 12.8665 19.2207 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3982 20.1109 10.2323"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.81104 5.82036C7.08826 5.9849 7.40401 6.07331 7.72637 6.07666C8.77228 6.07677 9.6244 5.23688 9.63941 4.19107C9.63698 3.68455 9.83649 3.19793 10.1938 2.8389C10.5511 2.47987 11.0368 2.27802 11.5433 2.27803H12.7973C13.3143 2.27782 13.8094 2.48689 14.1698 2.85762C14.5302 3.22836 14.7252 3.72918 14.7103 4.24599C14.7137 4.56835 14.8021 4.8841 14.9666 5.16133C15.2224 5.59747 15.6411 5.91398 16.1305 6.04104C16.6199 6.16811 17.1397 6.0953 17.5753 5.83867C18.4905 5.31427 19.6575 5.62956 20.184 6.54348L20.8065 7.62357V7.63272"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.20229 6.52518L3.5341 7.62357C3.00817 8.53635 3.31916 9.70257 4.22975 10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.889C5.18629 12.5725 4.82166 13.204 4.22975 13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1453L4.16568 17.2346C4.4124 17.6797 4.82636 18.0083 5.31595 18.1474C5.80554 18.2865 6.3304 18.2249 6.77438 17.976C7.21084 17.7213 7.73094 17.6515 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6716C9.53845 18.9489 9.62686 19.2646 9.63021 19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1747 14.5252C13.6306 14.5252 14.8109 13.3449 14.8109 11.889C14.8109 10.4331 13.6306 9.25284 12.1747 9.25284C10.7188 9.25284 9.53857 10.4331 9.53857 11.889C9.53857 13.3449 10.7188 14.5252 12.1747 14.5252Z"
                  stroke="#4A5568"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div ref={extend_menu} className="extend_menu">
            <div className="extend_menu__struct">
              <NavLink to={""} className="extend_menu_item active">
                <div className="text">Administrators</div>
              </NavLink>
              <NavLink to={""} className="extend_menu_item">
                <div className="text">Languages</div>
              </NavLink>
              <NavLink to={""} className="extend_menu_item">
                <div className="text">EndPoints</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
