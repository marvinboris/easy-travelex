import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import { Table } from "../../Components/Backend/table";

import { ModelVisaApplication } from "@/types/models/visa-application";
import Status from "@/Components/Backend/status";
import { Menu, Transition } from "@headlessui/react";
import { ArrowCircleDown2 } from "iconsax-react";

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
                    status: <Status status={visa.status} />,
                    action: (
                        <div className="flex gap-2">
                            <Status status={visa.status} mini />
                            <Menu as="div" className="relative z-10">
                                <Menu.Button className="size-6 flex justify-center items-center rounded-md bg-green-500 text-white">
                                    <ArrowCircleDown2 className="size-3" />
                                </Menu.Button>

                                <Transition>
                                    <Menu.Items>
                                        <div className="bg-white z-10 w-20 p-1 border border-neutral-200 rounded-md shadow-sm divide-y divide-zinc-800 absolute top-full right-0">
                                            <a className="block" download href={visa.passport}>
                                                <div className="hover:bg-black/10">
                                                    Passport
                                                </div>
                                            </a>
                                            <a className="block" download href={visa.doc}>
                                                <div className="hover:bg-black/10">
                                                    Birth Cert
                                                </div>
                                            </a>
                                            <a className="block" download href={visa.profile}>
                                                <div className="hover:bg-black/10">
                                                    Photo
                                                </div>
                                            </a>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    ),
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
