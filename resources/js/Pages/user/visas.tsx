import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import { Table } from "../../Components/Backend/table";

import { ModelVisaApplication } from "@/types/models/visa-application";

export default function UserVisas() {
    const [visas, setVisas] = useState<ModelVisaApplication[]>([]);

    const [show, setShow] = useState("05");
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get<{ visaApplications: ModelVisaApplication[]; total: number }>(
                `/api/user/visa-applications?show=${show}&search=${search}`
            )
            .then((res) => setVisas(res.data.visaApplications));
    }, [show, search]);

    return (
        <div>
            <Table
                title="Visa applications"
                subtitle="View and manage all visa applications"
                show={show}
                setShow={setShow}
                search={search}
                setSearch={setSearch}
                data={visas.map((visa, index) => ({
                    ...visa,
                    sl: index + 1,
                    date: moment(visa.created_at).format("lll"),
                    destination: visa.visa?.title,
                    status: ["Pending", "Failed", "Completed"][visa.status],
                }))}
                fields={[
                    { key: "sl", label: "SL" },
                    { key: "date", label: "Date" },
                    { key: "name", label: "Customer name" },
                    { key: "country", label: "Nationality" },
                    { key: "destination", label: "Destination" },
                    { key: "phone", label: "Phone No." },
                    { key: "status", label: "Status" },
                    { key: "action", label: "Action" },
                ]}
            />
        </div>
    );
}
