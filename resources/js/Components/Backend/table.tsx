import { ExportCurve, Filter, SearchNormal1 } from "iconsax-react";
import React from "react";

import { classNames } from "../../utils";

type TableProps = {
    title: string;
    subtitle: string;
    data: unknown[];
    fields: {
        label: string;
        key: string;
        centered?: boolean;
        maxWidth?: string | number;
    }[];
};

export function Table({ title, subtitle, data, fields }: TableProps) {
    return (
        <div className="bg-white rounded-[30px] pt-8 px-12 pb-14 space-y-6 shadow">
            <header className="flex items-center">
                <div>
                    <div className="text-[25px] font-bold">{title}</div>
                    <div className="text-sm font-medium">{subtitle}</div>

                    <div className="w-8 h-2 mt-2.5 rounded-full bg-lime-500" />
                </div>

                <div className="flex items-center ml-16 p-3.5 bg-slate-600/10 rounded-[10px]">
                    <div className="text-opacity-70 font-medium text-sm">
                        Show
                    </div>

                    <div className="ml-2.5">
                        <div className="h-4 w-0.5 bg-slate-600 rounded-full" />
                    </div>

                    <select
                        name="show"
                        id="show"
                        className="bg-transparent ml-1 text-center outline-none text-opacity-80 font-bold border-0 p-0"
                    >
                        <option value="5">05</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>

                <div className="ml-auto bg-slate-600/10 rounded-[10px] flex items-center gap-2 px-3.5 h-11">
                    <div className="w-3.5">
                        <SearchNormal1 className="w-full" />
                    </div>

                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Type to search"
                        className="bg-transparent outline-none border-0 flex-1 text-sm placeholder:text-opacity-40"
                    />

                    <div className="w-3.5">
                        <Filter className="w-full" />
                    </div>
                </div>

                <button
                    type="button"
                    className="ml-5 h-11 bg-amber-600 px-5 inline-flex items-center gap-2 text-white rounded-[10px]"
                >
                    <span className="text-sm font-bold">Export table</span>
                    <ExportCurve className="w-5 h-5 opacity-50" />
                </button>
            </header>

            <div className="w-full overflow-auto no-scrollbar">
                <table className="w-full text-sm">
                    <thead className="relative z-0">
                        <div className="absolute bg-gray-100 rounded-lg -z-10 inset-0" />
                        <tr>
                            {fields.map((field) => (
                                <th
                                    key={field.key}
                                    className={classNames(
                                        field.centered
                                            ? "text-center"
                                            : "text-left",
                                        "px-8 py-3"
                                    )}
                                >
                                    <div className="inline-flex items-center gap-2">
                                        <span>{field.label}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {fields.map((field) => (
                                    <td
                                        key={index + "-" + field.key}
                                        className={classNames(
                                            field.centered
                                                ? "text-center"
                                                : "text-left",
                                            "px-8 py-2"
                                        )}
                                        style={
                                            field.maxWidth
                                                ? { maxWidth: field.maxWidth }
                                                : {}
                                        }
                                    >
                                        <div className="line-clamp-2">
                                            {
                                                (
                                                    item as {
                                                        [
                                                            key: string
                                                        ]: React.ReactNode;
                                                    }
                                                )[field.key]
                                            }
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
