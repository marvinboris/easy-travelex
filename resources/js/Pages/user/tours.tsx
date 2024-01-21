import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import { Table } from "../../Components/Backend/table";

import { ModelTourApplication } from "@/types/models/tour-application";

export default function UserTours() {
    const [tours, setTours] = useState<ModelTourApplication[]>([]);

    const [show, setShow] = useState("05");
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get<{ tourApplications: ModelTourApplication[]; total: number }>(
                `/api/user/tour-applications?show=${show}&search=${search}`
            )
            .then((res) => setTours(res.data.tourApplications));
    }, [show, search]);

    return (
        <div>
            <Table
                title="Tour applications"
                subtitle="View and manage all tour applications"
                show={show}
                setShow={setShow}
                search={search}
                setSearch={setSearch}
                data={tours.map((tour, index) => ({
                    ...tour,
                    sl: index + 1,
                    created_at: moment(tour.created_at).format("lll"),
                    date: moment(tour.date).format("lll"),
                    package: tour.tour
                        ? tour.tour.title
                        : "Custom" +
                          (JSON.parse(tour.places || "[]")
                              ? " (" +
                                JSON.parse(tour.places || "[]").join(", ") +
                                ")"
                              : ""),
                    passport: (
                        <a download href={tour.passport}>
                            Download
                        </a>
                    ),
                    status: ["Pending", "Failed", "Completed"][tour.status],
                }))}
                fields={[
                    { key: "sl", label: "SL" },
                    { key: "created_at", label: "Date" },
                    { key: "name", label: "Customer name" },
                    { key: "customer_type", label: "Type of Cus." },
                    { key: "date", label: "Tour date" },
                    { key: "phone", label: "Phone No." },
                    { key: "package", label: "Package" },
                    { key: "passport", label: "Passport" },
                    { key: "status", label: "Status" },
                    { key: "action", label: "Action" },
                ]}
            />
        </div>
    );
}
