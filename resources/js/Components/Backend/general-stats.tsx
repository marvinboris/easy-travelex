import axios from "axios";
import React from "react";

const Stat = ({
    title,
    value,
    icon,
    loading,
}: {
    title: string;
    loading: boolean;
    value: React.ReactNode;
    icon: React.ReactNode;
}) => (
    <div className="stat_item">
        <div className="stat_item__struct">
            <div className="title">{title}</div>
            <div className="value">
                <div className="val">
                    {loading ? (
                        <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : (
                        value
                    )}
                </div>
                <div className="ico">{icon}</div>
            </div>
        </div>
    </div>
);

export default function GeneralStats() {
    const [loading, setLoading] = React.useState(false);
    const [stats, setStats] = React.useState({
        visas: 0,
        customers: 0,
        expenses: 0,
        income: 0,
    });

    React.useEffect(() => {
        setLoading(true);
        axios
            .get<{
                visas: number;
                customers: number;
                expenses: number;
                income: number;
            }>("/api/user/dashboard")
            .then((res) => {
                setStats(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="containerStats !grid grid-cols-1 gap-4 md:grid-cols-4">
            <Stat
                title="Total visa requests"
                loading={loading}
                value={stats.visas}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                    >
                        <path
                            d="M26.9615 4.75C30.212 4.88094 32.7739 7.56764 32.7508 10.8228V27.1755C32.8217 30.457 30.2212 33.1761 26.9399 33.2484L13.6574 33.25C10.4269 33.2624 7.78023 30.688 7.7032 27.4591V10.8228C7.63079 7.54145 10.2328 4.82241 13.5141 4.75154C13.5417 4.75065 18.0224 4.75027 21.8036 4.75011"
                            stroke="#DC810B"
                            strokeWidth="2.375"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.0776 25.2322H26.9369M25.099 19.365H26.9368"
                            stroke="#DC810B"
                            strokeWidth="2.375"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.6787 16.3671L18.3993 19.0877L25.2331 12.2523"
                            stroke="#DC810B"
                            strokeWidth="2.375"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.24786 26.4369H10.5134M5.24786 18.9975H10.5134M5.24786 11.5596H10.5134"
                            stroke="#DC810B"
                            strokeWidth="2.375"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            />

            <Stat
                title="Total customers"
                loading={loading}
                value={stats.customers}
                icon={
                    <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.1865 19.8283C17.3462 19.8283 24.2048 20.4075 24.2048 25.42C24.2048 30.7044 16.2112 31.0214 12.7838 31.0405L12.1865 31.0417C11.5311 31.0417 10.9991 30.513 10.9991 29.858C10.9991 29.2046 11.5311 28.6743 12.1865 28.6743C16.5863 28.6743 21.8299 28.1109 21.8299 25.42C21.8299 23.2815 18.5859 22.1956 12.1865 22.1956C7.78673 22.1956 2.5415 22.7591 2.5415 25.4515C2.5415 26.0544 2.71882 26.8325 4.09939 27.508C4.65985 27.7826 5.36756 28.0114 6.20192 28.1882C6.84312 28.3239 7.25318 28.9521 7.11544 29.5928C6.97928 30.232 6.34916 30.6439 5.70795 30.5035C4.6836 30.2857 3.79066 29.9937 3.05446 29.6355C0.668539 28.4676 0.166656 26.7141 0.166656 25.4515C0.166656 19.8283 9.21321 19.8283 12.1865 19.8283ZM24.8454 18.7117C25.762 18.7748 26.6819 18.9074 27.5812 19.1062C29.584 19.4992 30.9028 20.3073 31.4759 21.5067C31.9525 22.5057 31.9525 23.6484 31.4759 24.6474C30.9107 25.8358 29.5935 26.6486 27.5622 27.0637C27.4814 27.0795 27.4023 27.0874 27.3215 27.0874C26.7706 27.0874 26.275 26.7023 26.161 26.142C26.0296 25.5012 26.4428 24.8763 27.0856 24.7453C28.2936 24.4991 29.1122 24.0935 29.3306 23.6326C29.4985 23.2791 29.4985 22.8751 29.3322 22.5247C29.109 22.0607 28.2936 21.6582 27.0935 21.4231C26.2829 21.2432 25.4818 21.1279 24.6823 21.0743C24.0284 21.0285 23.5344 20.4651 23.5804 19.8133C23.6247 19.1583 24.2026 18.6785 24.8454 18.7117ZM12.1868 0.958332C16.6689 0.958332 20.3151 4.5946 20.3151 9.0626C20.3151 13.5306 16.6689 17.1669 12.1868 17.1669C10.3503 17.1669 8.61982 16.5782 7.18542 15.464C6.6677 15.0615 6.57429 14.3181 6.97801 13.8021C7.38174 13.2876 8.12585 13.1944 8.64357 13.5953C9.65841 14.3829 10.8838 14.7995 12.1868 14.7995C15.3596 14.7995 17.9403 12.2254 17.9403 9.0626C17.9403 5.89981 15.3596 3.32569 12.1868 3.32569C9.01246 3.32569 6.4318 5.89981 6.4318 9.0626C6.4318 9.71599 5.89984 10.2463 5.24438 10.2463C4.58892 10.2463 4.05696 9.71599 4.05696 9.0626C4.05696 4.5946 7.70313 0.958332 12.1868 0.958332ZM22.3638 2.64752C25.8976 2.64752 28.7711 5.51361 28.7711 9.03467C28.7711 12.5573 25.8976 15.4218 22.3638 15.4218C21.7084 15.4218 21.1764 14.8915 21.1764 14.2381C21.1764 13.5847 21.7084 13.0544 22.3638 13.0544C24.5882 13.0544 26.3963 11.2505 26.3963 9.03467C26.3963 6.81882 24.5882 5.01489 22.3638 5.01489C21.7084 5.01489 21.1764 4.4846 21.1764 3.8312C21.1764 3.17781 21.7084 2.64752 22.3638 2.64752Z"
                            fill="#40618D"
                        />
                    </svg>
                }
            />

            <Stat
                title="Total expenses (AED)"
                loading={loading}
                value={stats.expenses}
                icon={
                    <svg
                        width={31}
                        height={24}
                        viewBox="0 0 31 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.7637 1.81125H7.35426C4.01638 1.81125 1.94 4.16713 1.94 7.50206V16.4968C1.94 19.8316 4.01638 22.1861 7.35426 22.1861H9.27233"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M26.5196 16.4946C26.5196 19.8297 24.4431 22.184 21.1067 22.184H14.2306"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.5644 9.04466H1.94"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.8903 16.3285H11.944"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M26.5195 2.72414V10.8463"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23.7394 5.51631L26.5196 2.72414L29.3 5.51631"
                            stroke="#FF0000"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            />

            <Stat
                title="Total income (AED)"
                loading={loading}
                value={stats.income}
                icon={
                    <svg
                        width={31}
                        height={32}
                        viewBox="0 0 31 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M29.2997 21.9482H21.665C19.9109 21.9482 18.4899 20.5272 18.4899 18.7729C18.4899 17.0189 19.9109 15.5978 21.665 15.5978H25.6698"
                            stroke="#089C20"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.62 30.3981H22.3597C26.1933 30.3981 29.3 27.2913 29.3 23.4577V14.0875C29.3 10.2539 26.1933 7.14719 22.3597 7.14719H8.88038C5.04675 7.14719 1.93999 10.2539 1.93999 14.0875V23.4577C1.93999 27.2913 5.04675 30.3981 8.88038 30.3981H10.5273"
                            stroke="#089C20"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.71335 16.9233V20.6153"
                            stroke="#089C20"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M25.1732 7.71264L22.8135 3.93814C21.3568 1.60807 18.2826 0.907658 15.9666 2.35208L8.34756 7.12584L8.33199 7.14141H8.31798"
                            stroke="#089C20"
                            strokeWidth="2.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            />
        </div>
    );
}
