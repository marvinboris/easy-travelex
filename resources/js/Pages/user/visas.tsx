import { Table } from "../../Components/Backend/table";

export default function UserVisas() {
    return (
        <div>
            <Table
                title="Visa applications"
                subtitle="View and manage all commissions"
                data={[]}
                fields={[
                    { key: "sl", label: "SL" },
                    { key: "date", label: "Date" },
                    { key: "name", label: "Customer name" },
                    { key: "nationality", label: "Nationality" },
                    { key: "destination", label: "Destination" },
                    { key: "phone", label: "Phone No." },
                    { key: "status", label: "Status" },
                    { key: "action", label: "Action" },
                ]}
            />
        </div>
    );
}
