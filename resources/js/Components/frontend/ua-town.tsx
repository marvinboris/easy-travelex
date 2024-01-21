import React from "react";

const UaTown = (props: {
    onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    townSelected: string[];
}) => {
    let villesEmirats = [
        "Abou Dhabi",
        "Dubai",
        "Sharjah",
        "Al Ain",
        "Ras Al Khaimah",
        "Fujairah",
        "Ajman",
        "Umm Al-Quwain",
        "Khor Fakkan",
        "Kalba",
        "Dibba Al-Fujairah",
        "Dibba Al-Hisn",
        "Hatta",
        "Madinat Zayed",
        "Liwa Oasis",
        "Al Dhaid",
        "Al Quoz",
        "Al Jazirah Al Hamra",
        "Dhayah",
        "Masafi",
        "Al Hamriyah",
        "Ar-Rams",
        "Al Madam",
        "Al Shuwaib",
        "Al Sila",
        "Murbah",
        "Al Mirfa",
        "Ghayathi",
        "Ruwais",
        "Sila",
    ];

    return (
        <select
            className="input"
            id="villes-emirats"
            required
            name="villes-emirats"
            onChange={props.onchange}
        >
            <option value="">Sélectionnez une ville</option>
            {villesEmirats
                .filter((ville) => !props.townSelected.includes(ville))
                .map((ville, index) => (
                    <option key={index} value={ville}>
                        {ville}
                    </option>
                ))}
        </select>
    );
};

export default UaTown;
