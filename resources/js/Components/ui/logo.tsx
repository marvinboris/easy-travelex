import imgLogo from "@/assets/images/logo.png";

export default function Logo() {
    return (
        <div className="logo">
            {" "}
            <img src={imgLogo} alt="" className="size-full object-contain" />
        </div>
    );
}
