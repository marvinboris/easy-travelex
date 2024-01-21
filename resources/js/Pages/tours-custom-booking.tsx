import axios, { AxiosError } from "axios";
import gsap from "gsap";
import moment from "moment";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

import imgCircleBooking from "../assets/images/svg/circlebooking.svg";
import imgRelocation1 from "../assets/images/relocation1.webp";
import imgRelocation2 from "../assets/images/relocation2.jpg";
import imgRelocation3 from "../assets/images/relocation3.jpg";
import UaTown from "../Components/frontend/ua-town";

const CheckSquare = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M13.753 -9.15527e-05C17.59 -9.15527e-05 20 2.39191 20 6.25291V8.82191C20 9.23891 19.661 9.57791 19.244 9.57791H19.235V9.55991C18.813 9.55991 18.471 9.21891 18.47 8.79691V6.25291C18.47 3.19991 16.8 1.52991 13.756 1.52991H6.256C3.21 1.52991 1.53 3.20991 1.53 6.25291V13.7529C1.53 16.7869 3.21 18.4669 6.253 18.4669H13.753C16.796 18.4669 18.467 16.7869 18.467 13.7529C18.467 13.3309 18.809 12.9879 19.232 12.9879C19.655 12.9879 19.997 13.3309 19.997 13.7529C20 17.6079 17.608 19.9999 13.756 19.9999H6.253C2.392 19.9999 0 17.6079 0 13.7559V6.25591C0 2.39191 2.392 -9.15527e-05 6.253 -9.15527e-05H13.753ZM13.0296 7.09641C13.3226 6.80341 13.7976 6.80341 14.0906 7.09641C14.3836 7.38941 14.3836 7.86441 14.0906 8.15741L9.3436 12.9044C9.2026 13.0444 9.0116 13.1234 8.8136 13.1234C8.6136 13.1234 8.4236 13.0444 8.2826 12.9044L5.9096 10.5304C5.6166 10.2374 5.6166 9.76241 5.9096 9.46941C6.2026 9.17641 6.6776 9.17641 6.9706 9.46941L8.8136 11.3134L13.0296 7.09641Z"
            fill="#089C20"
        />
    </svg>
);

const RequireSign = () => (
    <div className="require_sign">
        <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.088 3.36V4.896L4.904 4.8L6.176 6.552L4.808 7.368L3.728 5.4L2.648 7.368L1.304 6.552L2.552 4.8L0.392 4.896V3.36L2.552 3.48L1.304 1.704L2.648 0.887999L3.728 2.856L4.808 0.887999L6.176 1.704L4.904 3.48L7.088 3.36Z"
                fill="#FF0000"
            />
        </svg>
    </div>
);

const ToursCustomBooking = () => {
    const [form, setForm] = useState({
        customer_type: "",
        name: "",
        persons: "1",
        country: "",
        phone: "",
        date: "",
        passportImg: null as File | null,
    });

    const [townSelected, setTownSelected] = useState<string[]>([]);

    const handleClickBtnPassport = () =>
        document.getElementById("passportImg")?.click();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (name === "phone" && !value.match(/^[0-9]*$/)) return;
        setForm((f) => ({
            ...f,
            [name]:
                "files" in e.target && e.target.files
                    ? e.target.files[0]
                    : value,
        }));
    };

    function removeElementByIndex<T extends unknown[]>(arr: T, index: number) {
        if (index < 0 || index >= arr.length) {
            console.error("Index invalide.");
            return arr;
        }
        arr.splice(index, 1);
        return arr;
    }

    const handleChangeHiddenFileInput = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.stopPropagation();
        let passportInputTarget = document.getElementById(
            "passportInputTarget"
        ) as HTMLInputElement;
        if (passportInputTarget) {
            let file = e.target.files?.[0];
            if (file) {
                let src = file.name;
                setForm((f) => ({ ...f, passportImg: file || null }));
                passportInputTarget.value = src;
            }
        }
    };

    const handleDeleteIco = (id: number) => {
        console.log(id);
        const newTownSelected = removeElementByIndex([...townSelected], id);
        setTownSelected([...newTownSelected]);
    };
    // town_item(ville,index,handleDeleteIco)
    const town_item = (
        town: string,
        id: number,
        handleDeleteIco: (id: number) => void
    ) => {
        return (
            <div className="town_item town_style" key={id}>
                <input
                    type="checkbox"
                    onChange={() => {}}
                    name="places[]"
                    checked
                    value={town}
                />
                <div className="text">{town}</div>
                <button
                    onClick={() => handleDeleteIco(id)}
                    type="button"
                    className="delete_ico"
                    data-num={id}
                >
                    <svg
                        width={9}
                        height={11}
                        viewBox="0 0 9 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.99578 3.8666C8.19232 3.8831 8.33862 4.0596 8.32253 4.26109C8.32009 4.29459 8.05528 7.65704 7.90264 9.06752C7.80901 9.93751 7.24769 10.466 6.40207 10.4815C5.75932 10.4935 5.60375 10.5 4.96051 10.5C4.83859 10.5 4.71716 10.5 4.59524 10.4995C4.39822 10.4985 4.23875 10.3345 4.23972 10.132C4.24022 9.93051 4.39969 9.76801 4.59671 9.76801L4.77793 9.76845C5.00625 9.76879 5.1895 9.76814 5.36374 9.76659L5.62284 9.7636C5.84064 9.76055 6.07253 9.75614 6.3889 9.75051C6.87609 9.74101 7.13894 9.49152 7.19308 8.98752C7.34474 7.58704 7.60906 4.23559 7.6115 4.20209C7.6271 4.0006 7.80169 3.8561 7.99578 3.8666ZM1.00412 3.86645C1.20065 3.85745 1.3728 4.00095 1.3884 4.20244C1.39084 4.23594 1.65321 7.57839 1.80634 8.98987C1.8595 9.48337 2.11894 9.73836 2.57735 9.74836C2.77437 9.75236 2.93091 9.91986 2.92701 10.1219C2.92262 10.3214 2.76364 10.4799 2.57004 10.4799H2.56272C1.75026 10.4624 1.18895 9.92286 1.09678 9.07137C0.942671 7.64839 0.679816 4.29444 0.677377 4.26044C0.661284 4.05945 0.807586 3.88295 1.00412 3.86645ZM5.53411 0.5C5.97789 0.5 6.36803 0.806995 6.48312 1.24699C6.53433 1.44249 6.42119 1.64298 6.23099 1.69548C6.04129 1.74798 5.84525 1.63198 5.79404 1.43649C5.76234 1.31599 5.65554 1.23199 5.53411 1.23199H3.46589C3.34446 1.23199 3.23766 1.31599 3.20596 1.43649L3.09233 2.02298C3.07673 2.10198 3.05234 2.17597 3.02308 2.24847H8.64302C8.84004 2.24847 9 2.41197 9 2.61397C9 2.81647 8.84004 2.97996 8.64302 2.97996H0.356489C0.159469 2.97996 0 2.81647 0 2.61397C0 2.41197 0.159469 2.24847 0.356489 2.24847H1.95362C2.16624 2.24847 2.35107 2.09298 2.39252 1.87998L2.51151 1.26999C2.63197 0.806995 3.02211 0.5 3.46589 0.5H5.53411Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        );
    };

    // const deleteBtn = () => {
    //   return (
    //     <div className="tag_section town_style">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width={20}
    //         height={21}
    //         viewBox="0 0 20 21"
    //         fill="none"
    //       >
    //         <path
    //           d="M17.6958 11.0644C18.0478 11.0644 18.3332 10.7789 18.3332 10.4267V9.57652C18.3332 6.20507 16.8313 4.56333 13.7544 4.56333H11.4834C11.1136 4.56508 10.7642 4.39436 10.5383 4.10159L9.8057 3.1268C9.33243 2.51925 8.60492 2.16481 7.835 2.16666H6.23793C3.20497 2.16666 1.6665 3.91836 1.6665 7.37775V13.6296C1.6665 16.8398 3.65918 18.8333 6.87529 18.8333H13.1171C16.3258 18.8333 18.3258 16.8398 18.3258 13.6296C18.2908 13.3018 18.0143 13.0533 17.6848 13.0533C17.3553 13.0533 17.0789 13.3018 17.0438 13.6296C17.0438 16.1582 15.6519 17.558 13.1171 17.558H6.86797C4.33317 17.558 2.94123 16.1655 2.94123 13.6296V13.0213H13.1976C13.5496 13.0213 13.835 12.7358 13.835 12.3836C13.835 12.0315 13.5496 11.746 13.1976 11.746H2.94123V7.34843C2.94123 4.59264 3.92291 3.41264 6.23061 3.41264H7.84233C8.21201 3.41811 8.55939 3.59053 8.78738 3.88171L9.51998 4.84917C9.98498 5.46562 10.7114 5.82899 11.4834 5.83128H13.7471C16.128 5.83128 17.0511 6.89402 17.0511 9.57652V10.4267C17.0511 10.5971 17.1193 10.7604 17.2404 10.8802C17.3615 11 17.5255 11.0663 17.6958 11.0644Z"
    //           fill="#E08700"
    //         />
    //       </svg>
    //       <div className="text">+ More</div>
    //     </div>
    //   );
    // };

    const handleChangeInputTown = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTown = e.target.value;

        if (!townSelected.includes(selectedTown) && selectedTown !== "") {
            const uniqueTowns = new Set([...townSelected, selectedTown]);
            const uniqueTownsArray = Array.from(uniqueTowns);
            setTownSelected([...uniqueTownsArray]);
        }
    };

    useEffect(() => {
        gsap.from(".town_item:last-child", {
            opacity: 0,
            y: 50,
            duration: 0.5,
            skewX: "15deg",
            scaleX: 1.3,
            ease: "bounce",
            onComplete: function () {},
        });
    }, [townSelected]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (Object.values(form).every((v) => v))
            axios
                .post("/api/tour-applications", e.target)
                .then((res) => {
                    Swal.fire({
                        title: "Good job!",
                        text: "Application submitted successfully",
                        icon: "success",
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Oops!",
                        text: (error as AxiosError).message,
                        icon: "error",
                    });
                });
        else
            Swal.fire({
                title: "Oops!",
                text: "Please fill all required fields",
                icon: "error",
            });
    };

    useEffect(() => {
        const phone = document.querySelector("#phone") as HTMLInputElement;
        const nationality = document.querySelector(
            "#nationality"
        ) as HTMLInputElement;

        const handlePhoneCountryChange = () => {
            setForm((f) => ({
                ...f,
                phone: itiPhone.getSelectedCountryData().dialCode,
            }));
        };

        const handleNationalityCountryChange = () => {
            setForm((f) => ({
                ...f,
                country: itiNationality.getSelectedCountryData().name,
            }));
        };

        const itiPhone = window.intlTelInput(phone, {
            initialCountry: "ae",
            separateDialCode: false,
            utilsScript:
                "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        });

        handlePhoneCountryChange();
        phone.addEventListener(
            "countrychange",
            handlePhoneCountryChange,
            false
        );

        const itiNationality = window.intlTelInput(nationality, {
            initialCountry: "cm",
            separateDialCode: false,
            utilsScript:
                "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
        });

        handleNationalityCountryChange();
        nationality.addEventListener(
            "countrychange",
            handleNationalityCountryChange,
            false
        );

        return () => {
            phone.removeEventListener(
                "countrychange",
                handlePhoneCountryChange,
                true
            );

            nationality.removeEventListener(
                "countrychange",
                handleNationalityCountryChange,
                true
            );
        };
    }, []);

    return (
        <div className="section formApplication layer_section tourscustombooking">
            <img
                src={imgCircleBooking}
                alt={imgCircleBooking}
                className="circle_booking"
            />
            <div className="struct ">
                <div className="formApplication_contain">
                    <div className="left">
                        <h1>Compose your tour with ease.</h1>
                        <div className="cardsGalerie">
                            <div className="card_galerie_container">
                                <div className="card_galerie">
                                    <div className="card_galerie__img">
                                        <img
                                            src={imgRelocation1}
                                            alt={imgRelocation1}
                                        />
                                    </div>
                                    <div className="card_galerie__struct">
                                        <div className="text">
                                            <div className="t1">
                                                Burj Khalifa
                                            </div>
                                            <div className="t2">
                                                Visit the tallest tour in the
                                                world
                                            </div>
                                        </div>

                                        <div className="card_preview">
                                            <img
                                                src={imgRelocation2}
                                                alt={imgRelocation1}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_galerie">
                                    <div className="card_galerie__img">
                                        <img
                                            src={imgRelocation2}
                                            alt={imgRelocation1}
                                        />
                                    </div>
                                    <div className="card_galerie__struct">
                                        <div className="text">
                                            <div className="t1">
                                                Burj Khalifa
                                            </div>
                                            <div className="t2">
                                                Visit the tallest tour in the
                                                world
                                            </div>
                                        </div>

                                        <div className="card_preview">
                                            <img
                                                src={imgRelocation3}
                                                alt={imgRelocation1}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card_galerie">
                                    <div className="card_galerie__img">
                                        <img
                                            src={imgRelocation3}
                                            alt={imgRelocation1}
                                        />
                                    </div>
                                    <div className="card_galerie__struct">
                                        <div className="text">
                                            <div className="t1">
                                                Burj Khalifa
                                            </div>
                                            <div className="t2">
                                                Visit the tallest tour in the
                                                world
                                            </div>
                                        </div>

                                        <div className="card_preview">
                                            <img
                                                src={imgRelocation1}
                                                alt={imgRelocation1}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card_actions">
                                <button id="left-button" className="action">
                                    <svg
                                        width={6}
                                        height={12}
                                        viewBox="0 0 6 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.83734 11.1722C6.03569 10.9757 6.05347 10.6674 5.88609 10.4522L5.83585 10.396L0.95182 5.61162C0.733199 5.39727 0.379984 5.39801 0.16285 5.61308C0.0550271 5.71989 0 5.86035 0 6.00008C0 6.11774 0.0382133 6.23489 0.114209 6.33248L0.164338 6.38854L5.04837 11.1729C5.26699 11.3873 5.6202 11.3866 5.83734 11.1722ZM5.83577 1.60472C6.05514 1.39037 6.05365 1.04288 5.83726 0.828531C5.63822 0.631376 5.32484 0.614331 5.10559 0.777398L5.04829 0.826337L1.80467 4.0035C1.69536 4.11031 1.64033 4.2515 1.64033 4.39196C1.64033 4.53169 1.69536 4.67215 1.80318 4.77896C2.00222 4.97611 2.3156 4.99316 2.53485 4.83009L2.59215 4.78115L5.83577 1.60472Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                <button id="right-button" className="action">
                                    <svg
                                        width={6}
                                        height={12}
                                        viewBox="0 0 6 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.162665 0.827787C-0.0356927 1.02427 -0.0534721 1.33264 0.113909 1.54777L0.164152 1.60397L5.04818 6.38838C5.2668 6.60273 5.62002 6.60199 5.83715 6.38692C5.94497 6.28011 6 6.13965 6 5.99992C6 5.88226 5.96179 5.76511 5.88579 5.66752L5.83566 5.61146L0.951635 0.827056C0.733014 0.612709 0.379799 0.61344 0.162665 0.827787ZM0.164226 10.3953C-0.055139 10.6096 -0.0536518 10.9571 0.162739 11.1715C0.361778 11.3686 0.675163 11.3857 0.894406 11.2226L0.951709 11.1737L4.19533 7.9965C4.30464 7.88969 4.35967 7.7485 4.35967 7.60804C4.35967 7.46831 4.30464 7.32785 4.19682 7.22104C3.99778 7.02389 3.6844 7.00684 3.46515 7.16991L3.40785 7.21885L0.164226 10.3953Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="check_form_list">
                            <ul>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Days on demand city tour.
                                    </div>
                                </li>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Available for many persons
                                    </div>
                                </li>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Visit attractions in UAE
                                    </div>
                                </li>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Upload a clear photo of your passport.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="separate_bar"></div>

                    <div className="right">
                        <div className="form_container">
                            <form
                                onSubmit={handleSubmit}
                                className="form"
                                encType="multipart/form-data"
                            >
                                <div className="form__struct">
                                    <div className="form__struct__title">
                                        <div className="icon">
                                            <svg
                                                width={25}
                                                height={29}
                                                viewBox="0 0 25 29"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.8557 0.75C15.8832 0.75 15.9065 0.763843 15.9339 0.766612H16.2163C16.4959 0.766612 16.7632 0.881513 16.9579 1.0864L23.901 8.3902C24.0847 8.584 24.1875 8.84149 24.1875 9.11006V21.799C24.1875 25.2958 21.376 28.25 18.0477 28.25H7.09628C3.57331 28.25 0.8125 25.4162 0.8125 21.799V18.3298C0.8125 17.7567 1.27309 17.2915 1.84061 17.2915C2.40812 17.2915 2.86871 17.7567 2.86871 18.3298V21.799C2.86871 24.252 4.72615 26.1735 7.09628 26.1735H18.0477C20.2231 26.1735 22.1313 24.1288 22.1313 21.799V9.52674L16.8838 4.00736V5.8167C16.8838 7.20658 18.0024 8.34036 19.3787 8.34313C19.9462 8.34451 20.4054 8.80965 20.4041 9.38416C20.4027 9.95589 19.9435 10.4196 19.376 10.4196C16.8674 10.4141 14.8276 8.35005 14.8276 5.8167V2.84313H7.09628C4.80429 2.84313 2.86871 4.73137 2.86871 6.96709V12.6858C2.86871 13.2589 2.40812 13.7241 1.84061 13.7241C1.27309 13.7241 0.8125 13.2589 0.8125 12.6858V6.96709C0.8125 3.6059 3.68982 0.766612 7.09628 0.766612H15.7762C15.8036 0.763843 15.8269 0.75 15.8557 0.75ZM15.596 18.4808C16.1635 18.4808 16.6241 18.946 16.6241 19.5191C16.6241 20.0922 16.1635 20.5573 15.596 20.5573H8.19635C7.62884 20.5573 7.16825 20.0922 7.16825 19.5191C7.16825 18.946 7.62884 18.4808 8.19635 18.4808H15.596ZM12.7968 11.6253C13.3643 11.6253 13.8249 12.0904 13.8249 12.6635C13.8249 13.2366 13.3643 13.7018 12.7968 13.7018H8.19635C7.62884 13.7018 7.16825 13.2366 7.16825 12.6635C7.16825 12.0904 7.62884 11.6253 8.19635 11.6253H12.7968Z"
                                                    fill="#E08700"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text">
                                            <div className="t1">
                                                Create your package
                                            </div>
                                            <div className="t2">
                                                Fill the form below
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container_input">
                                        <div className="input_group">
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after require">
                                                        <div className="after__struct">
                                                            <div className="text">
                                                                Full
                                                                <span></span>
                                                                Name
                                                            </div>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <input
                                                        placeholder="Your full name"
                                                        className="input"
                                                        name="name"
                                                        id="name"
                                                        required
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                Customer
                                                                <span></span>
                                                                type
                                                            </span>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <label
                                                        htmlFor="customerType"
                                                        className="dropdown_ico"
                                                    >
                                                        <svg
                                                            width={12}
                                                            height={10}
                                                            viewBox="0 0 12 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.99992 0.5H8.00242C10.4849 0.5 11.5049 2.2625 10.2599 4.415L9.25492 6.1475L8.24992 7.88C7.00492 10.0325 4.97242 10.0325 3.72742 7.88L2.72242 6.1475L1.71742 4.415C0.494916 2.2625 1.50742 0.5 3.99742 0.5H5.99992Z"
                                                                stroke="#525252"
                                                                strokeWidth="0.875"
                                                                strokeMiterlimit={
                                                                    10
                                                                }
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </label>

                                                    <select
                                                        placeholder="Select"
                                                        className="input"
                                                        name="customer_type"
                                                        id="customerType"
                                                        value={
                                                            form.customer_type
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Select customer type
                                                        </option>
                                                        <option value="Inside customer">
                                                            Inside customer
                                                        </option>
                                                        <option value="Outside customer">
                                                            Outside customer
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_group">
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <div className="text">
                                                                Nationality
                                                                <span></span>
                                                            </div>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        id="nationality"
                                                        name="country"
                                                        placeholder="Select country"
                                                        className="input"
                                                        value={form.country}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                Mobile
                                                                <span></span>
                                                                No.
                                                            </span>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="text"
                                                        className="input"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_group">
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                No.
                                                                <span></span>
                                                                Of
                                                                <span></span>
                                                                person
                                                            </span>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <label
                                                        htmlFor="customerType"
                                                        className="dropdown_ico"
                                                    >
                                                        <svg
                                                            width={12}
                                                            height={10}
                                                            viewBox="0 0 12 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.99992 0.5H8.00242C10.4849 0.5 11.5049 2.2625 10.2599 4.415L9.25492 6.1475L8.24992 7.88C7.00492 10.0325 4.97242 10.0325 3.72742 7.88L2.72242 6.1475L1.71742 4.415C0.494916 2.2625 1.50742 0.5 3.99742 0.5H5.99992Z"
                                                                stroke="#525252"
                                                                strokeWidth="0.875"
                                                                strokeMiterlimit={
                                                                    10
                                                                }
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </label>

                                                    <input
                                                        type="number"
                                                        min={1}
                                                        className="input"
                                                        name="persons"
                                                        id="persons"
                                                        value={form.persons}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                Passport
                                                                <span></span>
                                                                expiry
                                                                <span></span>
                                                                date
                                                            </span>
                                                            <RequireSign />
                                                        </div>
                                                    </div>

                                                    <input
                                                        className="input"
                                                        type="date"
                                                        name="date"
                                                        id="date"
                                                        min={moment()
                                                            .add(6, "months")
                                                            .format(
                                                                "YYYY-MM-DD"
                                                            )}
                                                        value={form.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_group swap_file_group">
                                            <div className="input_container">
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                Select
                                                                <span></span>
                                                                multiple
                                                                <span></span>
                                                                places
                                                            </span>
                                                            <span className="require_sign">
                                                                <svg
                                                                    width={8}
                                                                    height={8}
                                                                    viewBox="0 0 8 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M7.088 3.36V4.896L4.904 4.8L6.176 6.552L4.808 7.368L3.728 5.4L2.648 7.368L1.304 6.552L2.552 4.8L0.392 4.896V3.36L2.552 3.48L1.304 1.704L2.648 0.887999L3.728 2.856L4.808 0.887999L6.176 1.704L4.904 3.48L7.088 3.36Z"
                                                                        fill="#FF0000"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <label
                                                        htmlFor="customerType"
                                                        className="dropdown_ico"
                                                    >
                                                        <svg
                                                            width={12}
                                                            height={10}
                                                            viewBox="0 0 12 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.99992 0.5H8.00242C10.4849 0.5 11.5049 2.2625 10.2599 4.415L9.25492 6.1475L8.24992 7.88C7.00492 10.0325 4.97242 10.0325 3.72742 7.88L2.72242 6.1475L1.71742 4.415C0.494916 2.2625 1.50742 0.5 3.99742 0.5H5.99992Z"
                                                                stroke="#525252"
                                                                strokeWidth="0.875"
                                                                strokeMiterlimit={
                                                                    10
                                                                }
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </label>

                                                    <UaTown
                                                        onchange={
                                                            handleChangeInputTown
                                                        }
                                                        townSelected={
                                                            townSelected
                                                        }
                                                    ></UaTown>
                                                </div>
                                            </div>
                                            <div
                                                onClick={handleClickBtnPassport}
                                                className="input_container btn_file_select"
                                            >
                                                <div className="input_container__struct">
                                                    <div className="after">
                                                        <div className="after__struct">
                                                            <span className="text">
                                                                Upload
                                                                <span></span>
                                                                passport
                                                            </span>
                                                            <span className="require_sign">
                                                                <svg
                                                                    width={8}
                                                                    height={8}
                                                                    viewBox="0 0 8 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M7.088 3.36V4.896L4.904 4.8L6.176 6.552L4.808 7.368L3.728 5.4L2.648 7.368L1.304 6.552L2.552 4.8L0.392 4.896V3.36L2.552 3.48L1.304 1.704L2.648 0.887999L3.728 2.856L4.808 0.887999L6.176 1.704L4.904 3.48L7.088 3.36Z"
                                                                        fill="#FF0000"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <label
                                                        htmlFor="customerType"
                                                        className="dropdown_ico image_ico"
                                                    >
                                                        <svg
                                                            width={23}
                                                            height={20}
                                                            viewBox="0 0 23 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.3689 18.6468C20.2109 18.6468 21.9686 16.6472 21.9686 13.8237V6.18685C21.9686 3.35356 20.2109 1.3539 17.3786 1.3539H6.40726C3.58486 1.3539 1.80859 3.35356 1.80859 6.18685V13.8237C1.80859 16.6472 3.57505 18.6468 6.40726 18.6468H12.8837"
                                                                stroke="#E08700"
                                                                strokeWidth="1.68"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M5.40234 14.5005C5.40234 13.4119 6.26105 12.0573 8.73582 12.0573C11.2106 12.0573 12.0693 13.4021 12.0693 14.4908"
                                                                stroke="#E08700"
                                                                strokeWidth="1.68"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6.60645 7.62746C6.60645 8.80328 7.55996 9.75674 8.73578 9.75674C9.9116 9.75674 10.8651 8.80328 10.8651 7.62746C10.8651 6.45164 9.9116 5.49813 8.73578 5.49813"
                                                                stroke="#E08700"
                                                                strokeWidth="1.68"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M14.2637 8.14943L18.1529 8.20274M15.7216 12.2956H18.1528"
                                                                stroke="#E08700"
                                                                strokeWidth="1.68"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </label>

                                                    <input
                                                        type="text"
                                                        placeholder="Select file"
                                                        className="input"
                                                        readOnly
                                                        id="passportInputTarget"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden_input">
                                            <input
                                                onChange={
                                                    handleChangeHiddenFileInput
                                                }
                                                id="passportImg"
                                                name="passportImg"
                                                type="file"
                                                accept="image/*,application/pdf"
                                            />
                                        </div>

                                        <div className="input_group_element selected_town_list">
                                            {townSelected.map((ville, index) =>
                                                town_item(
                                                    ville,
                                                    index,
                                                    handleDeleteIco
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="contain_form_btn_submit">
                                        <button
                                            type="submit"
                                            className="form_btn_submit"
                                        >
                                            <div className="text">
                                                Submit application
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14.1481 6.85673C14.4167 6.58641 14.8512 6.58641 15.1198 6.85673C15.3884 7.12704 15.3884 7.56526 15.1198 7.83558L10.1659 12.8221L13.6439 18.5808C13.7704 18.7902 13.9693 18.7883 14.0518 18.7791C14.1325 18.768 14.3277 18.7182 14.3974 18.4839L16.526 11.3201C16.636 10.9529 17.0182 10.7444 17.3822 10.8552C17.7461 10.9649 17.9533 11.3506 17.8442 11.7168L15.7156 18.8797C15.5094 19.5725 14.9392 20.0596 14.2269 20.151C14.1471 20.1621 14.0683 20.1667 13.9895 20.1667C13.368 20.1667 12.7996 19.8475 12.4687 19.2994L8.71021 13.0758C8.54612 12.8027 8.58737 12.4521 8.81196 12.227L14.1481 6.85673ZM17.8788 1.90418C18.5067 1.72151 19.1869 1.89772 19.648 2.36731C20.1091 2.83598 20.2796 3.5196 20.0917 4.15249L18.9467 8.00422C18.8376 8.37048 18.4563 8.57806 18.0914 8.4692C17.7275 8.35941 17.5203 7.97378 17.6294 7.60844L18.7744 3.75578C18.8385 3.5399 18.724 3.39413 18.6717 3.34155C18.6194 3.28804 18.4728 3.17179 18.261 3.23361L3.51042 7.52264C3.27575 7.59091 3.22441 7.78742 3.21341 7.8686C3.20333 7.94979 3.19966 8.15276 3.40867 8.28192L6.51261 10.1916C6.8362 10.3909 6.93887 10.8171 6.73995 11.1437C6.6107 11.3559 6.38519 11.474 6.15326 11.474C6.03134 11.474 5.90759 11.4417 5.79575 11.3725L2.69181 9.46188C2.0767 9.08363 1.75403 8.40277 1.85028 7.68409C1.94653 6.96448 2.43697 6.39341 3.12907 6.19229L17.8788 1.90418Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursCustomBooking;
