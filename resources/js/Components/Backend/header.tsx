import { Home, Menu } from "iconsax-react";

import imgProfile from "../../assets/images/profile.jpg";

import { useBackendContext } from "@/Layouts/backend/context";

export default function Header() {
    const { setMenuOpen } = useBackendContext();

    return (
        <div className="header">
            <div className="header__struct">
                <div className="header__struct__title gap-4">
                    <Menu
                        className="size-8 cursor-pointer md:hidden"
                        onClick={() => setMenuOpen(true)}
                    />

                    <div className="flex gap-2">
                        <Home className="size-6 flex-none text-[#5A657D]" />
                        <div className="title">
                            <span>Home /</span> Dashboard
                        </div>
                    </div>
                </div>

                <div className="header__struct__other !gap-6 md:!gap-12">
                    <div className="notifications !hidden md:!flex">
                        <div className="notification_badge blue" content="12">
                            <svg
                                width={16}
                                height={18}
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.1903 1.5C13.9011 1.56892 15.2494 2.98297 15.2373 4.69621V13.3029C15.2746 15.03 13.9059 16.4611 12.1789 16.4992L5.18811 16.5C3.48784 16.5065 2.09488 15.1516 2.05433 13.4522V4.69621C2.01623 2.96918 3.38569 1.53811 5.11271 1.50081C5.12723 1.50034 7.48551 1.50014 9.47559 1.50006"
                                    stroke="#4A5568"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.46191 12.2801H12.1773M11.21 9.19208H12.1772"
                                    stroke="#4A5568"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6.25195 7.61426L7.68384 9.04618L11.2806 5.44858"
                                    stroke="#4A5568"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M0.762054 12.9142H3.5334M0.762054 8.99867H3.5334M0.762054 5.08398H3.5334"
                                    stroke="#4A5568"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="notification_badge cta" content="4">
                            <svg
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9476 8.35092H13.4453"
                                    stroke="#E08700"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.54688 8.35092H6.04463"
                                    stroke="#E08700"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1.50325 4.86172C6.47091 5.56607 11.5131 5.56607 16.4807 4.86172"
                                    stroke="#E08700"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.568 11.3063H5.46997C5.30274 11.3063 5.13819 11.3756 5.0207 11.4945C4.90321 11.6135 4.83632 11.7788 4.83846 11.946V12.3832C4.85937 12.6261 4.77216 12.8735 4.60364 13.0497C4.43513 13.2258 4.19161 13.3247 3.94802 13.3146H2.38556C2.14331 13.3223 1.90201 13.2224 1.73527 13.0465C1.56854 12.8706 1.48232 12.6247 1.50303 12.3832L1.51924 8.14076C1.51795 7.47493 1.72768 6.82585 2.11833 6.28676L3.10602 4.92687C3.18363 4.82276 3.24629 4.70838 3.29221 4.5869L4.16663 2.15812C4.38415 1.53596 4.94949 1.05988 5.59963 0.951637C7.85525 0.595996 10.1526 0.595996 12.4082 0.951637C13.0613 1.05719 13.6305 1.53383 13.8493 2.15812L14.7237 4.5869C14.7696 4.71347 14.8322 4.83285 14.91 4.94269L15.8814 6.24643C16.2807 6.79135 16.4962 7.44943 16.4967 8.12493V12.3832C16.5177 12.6261 16.4304 12.8735 16.2619 13.0497C16.0934 13.2258 15.8497 13.3247 15.6061 13.3146H14.0517C13.8082 13.3247 13.5647 13.2258 13.3962 13.0497C13.2276 12.8735 13.1402 12.6261 13.1611 12.3832V11.946C13.1656 11.6008 12.8713 11.3063 12.5296 11.3063H11.2675"
                                    stroke="#E08700"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="notification_badge blue" content="2">
                            <svg
                                width={14}
                                height={16}
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.10779 6.68162L2.10702 7.66402C2.10702 8.24546 1.97858 8.81914 1.73183 9.3445L1.38389 10.0824C0.853809 11.2103 1.67657 12.5071 2.92277 12.5071H11.0764C12.3234 12.5071 13.1462 11.2103 12.6153 10.0824L12.2682 9.3445C12.0206 8.81914 11.8922 8.24546 11.8922 7.66402V6.68162C11.8922 3.97985 9.70223 1.78986 7.00047 1.78986C5.12271 1.78986 3.49171 2.84771 2.67151 4.40002"
                                    stroke="#4A5568"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7 0.799988V1.7901"
                                    stroke="#4A5568"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.59062 5.67897C4.70037 4.98853 5.18224 4.42575 5.8368 4.21014"
                                    stroke="#4A5568"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.69061 12.8914C4.69061 14.1664 5.72431 15.2001 6.99935 15.2001C7.69807 15.2001 8.32423 14.89 8.74767 14.4"
                                    stroke="#4A5568"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="separator" />
                    <div className="profile">
                        <div className="info !hidden md:!block">
                            <div className="name">Easy Travelex LLC</div>
                            <div className="email">demo34@gmail.com</div>
                        </div>

                        <div className="profile_pic">
                            <div className="img">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={54}
                                    height={54}
                                    viewBox="0 0 54 54"
                                    fill="none"
                                >
                                    <circle
                                        cx="26.7575"
                                        cy="27.0001"
                                        r="22.3746"
                                        fill="white"
                                        fillOpacity="0.2"
                                    />
                                    <path
                                        d="M36.5429 10.0404C32.7853 7.87092 28.4136 7.0108 24.1143 7.59507C19.8149 8.17933 15.8313 10.1749 12.7889 13.2684C9.74647 16.3619 7.81759 20.3783 7.30507 24.6868C6.79255 28.9953 7.72542 33.3521 9.9572 37.073C12.189 40.7939 15.5933 43.6683 19.6356 45.2448C23.678 46.8214 28.1295 47.0108 32.2911 45.7834C36.4528 44.556 40.089 41.9812 42.6288 38.4634C45.1687 34.9455 46.4683 30.6838 46.3237 26.3473"
                                        stroke="url(#paint0_linear_298_844)"
                                        strokeWidth="2.79761"
                                        strokeMiterlimit="2.50986"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="46.3344"
                                        cy="14.4106"
                                        r="3.49702"
                                        fill="#DC810B"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_298_844"
                                            x1="9.79164"
                                            y1="17.2084"
                                            x2="43.7109"
                                            y2="36.7917"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#DC810B" />
                                            <stop
                                                offset={1}
                                                stopColor="#EF4439"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <img src={imgProfile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
