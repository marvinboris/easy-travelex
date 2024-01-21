import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import imgUserCard from "../assets/images/svg/user-card.svg";

import { ModelTour } from "@/types/models/tour";

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

const ToursApplication = () => {
    const location = useLocation();
    const state = location.state as ModelTour | null;

    const navigate = useNavigate();

    const [form, setForm] = useState({
        customer_type: "",
        name: "",
        persons: state?.persons || "1",
        country: "",
        phone: "",
        date: "",
        passportImg: null,
    });

    const handleClickPassport_btn = () =>
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

    const handleChangeInputFileImage = (
        e: ChangeEvent<HTMLInputElement>,
        selectorEl: string
    ) => {
        e.stopPropagation();
        let picImg = document.querySelector(selectorEl) as HTMLImageElement;
        if (picImg) {
            let file = (
                e.target as
                    | (EventTarget & { files: FileList | null })
                    | undefined
            )?.files?.[0];
            if (file) {
                let src = URL.createObjectURL(file);
                picImg.src = src;
                picImg.classList.add("active");
            }
            handleChange(e);
        }
    };

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
        if (!state) navigate("/tours");

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
        <div className="section formApplication layer_section">
            <div className="struct ">
                <div className="formApplication_contain">
                    <div className="left">
                        <div className="tag_section">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={21}
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M17.6958 11.0644C18.0478 11.0644 18.3332 10.7789 18.3332 10.4267V9.57652C18.3332 6.20507 16.8313 4.56333 13.7544 4.56333H11.4834C11.1136 4.56508 10.7642 4.39436 10.5383 4.10159L9.8057 3.1268C9.33243 2.51925 8.60492 2.16481 7.835 2.16666H6.23793C3.20497 2.16666 1.6665 3.91836 1.6665 7.37775V13.6296C1.6665 16.8398 3.65918 18.8333 6.87529 18.8333H13.1171C16.3258 18.8333 18.3258 16.8398 18.3258 13.6296C18.2908 13.3018 18.0143 13.0533 17.6848 13.0533C17.3553 13.0533 17.0789 13.3018 17.0438 13.6296C17.0438 16.1582 15.6519 17.558 13.1171 17.558H6.86797C4.33317 17.558 2.94123 16.1655 2.94123 13.6296V13.0213H13.1976C13.5496 13.0213 13.835 12.7358 13.835 12.3836C13.835 12.0315 13.5496 11.746 13.1976 11.746H2.94123V7.34843C2.94123 4.59264 3.92291 3.41264 6.23061 3.41264H7.84233C8.21201 3.41811 8.55939 3.59053 8.78738 3.88171L9.51998 4.84917C9.98498 5.46562 10.7114 5.82899 11.4834 5.83128H13.7471C16.128 5.83128 17.0511 6.89402 17.0511 9.57652V10.4267C17.0511 10.5971 17.1193 10.7604 17.2404 10.8802C17.3615 11 17.5255 11.0663 17.6958 11.0644Z"
                                    fill="#089C20"
                                />
                            </svg>
                            <div className="text">Selected package</div>
                        </div>
                        <h1>{state?.title} tour package</h1>
                        <div className="check_form_list">
                            <ul>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        {state?.duration} days city tour.
                                    </div>
                                </li>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Available for {state?.persons} persons
                                    </div>
                                </li>
                                <li>
                                    <CheckSquare />
                                    <div className="text">
                                        Visit {state?.places} attractions in UAE
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

                    <div className="right">
                        <div className="form_container">
                            <form
                                onSubmit={handleSubmit}
                                className="form"
                                encType="multipart/form-data"
                            >
                                <input
                                    type="hidden"
                                    name="tour_id"
                                    value={state?.id}
                                />

                                <div className="form__struct">
                                    <div className="form__struct__title">
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
                                        <div className="text">
                                            Fill this form
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
                                                        required
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
                                                        required
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
                                                        max={state?.persons}
                                                        className="input"
                                                        required
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
                                                                Select
                                                                <span></span>
                                                                preferred
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
                                                        value={form.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="input_group input_group_element">
                                            <button
                                                type="button"
                                                className="document_face"
                                                onClick={
                                                    handleClickPassport_btn
                                                }
                                            >
                                                <div className="document_face__struct">
                                                    <img
                                                        src={imgUserCard}
                                                        alt={imgUserCard}
                                                    />

                                                    <div className="document_face_bar"></div>
                                                    <div className="title">
                                                        Upload <br /> passport /
                                                        ID
                                                    </div>

                                                    <img
                                                        className="passportIMG_previewImage previewImage"
                                                        src=""
                                                        alt=""
                                                    />
                                                </div>
                                            </button>

                                            <input
                                                type="file"
                                                className="contain_pic_input"
                                                id="passportImg"
                                                name="passportImg"
                                                onChange={(e) =>
                                                    handleChangeInputFileImage(
                                                        e,
                                                        ".passportIMG_previewImage"
                                                    )
                                                }
                                            />
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

export default ToursApplication;
