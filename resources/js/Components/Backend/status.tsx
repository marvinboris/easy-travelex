import { Check, CloseCircle } from "iconsax-react";

export default function Status({
    status,
    mini,
}: {
    status: number;
    mini?: boolean;
}) {
    return (
        <div
            className={`h-6 flex items-center gap-1 text-xs rounded-md ${
                mini ? "w-6 justify-center " : "w-24 px-2 "
            }${
                [
                    "text-amber-500 bg-amber-500/10",
                    "text-red-500 bg-red-500/10",
                    "text-green-500 bg-green-500/10",
                ][status]
            }`}
        >
            {
                [
                    <div className="size-3 border-[1.5px] border-amber-500 border-t-transparent rounded-full animate-spin" />,
                    <CloseCircle className="size-3" />,
                    <Check className="size-3" />,
                ][status]
            }
            {mini ? null : (
                <div>{["Pending", "Failed", "Approved"][status]}</div>
            )}
        </div>
    );
}
