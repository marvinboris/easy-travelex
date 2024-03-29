import axios from "axios";

import ApiAccountAdminType from "@/types/api/account/admin";
import ApiAccountUserType from "@/types/api/account/user";
import ApiMessageType from "@/types/api/message";

export const getCheck = async () => {
    const res = await axios.get<{
        role: string;
        data: ApiAccountAdminType | ApiAccountUserType | ApiMessageType;
    }>("/api/account");
    return res.data;
};

// Login
export const postUserLogin = async (data: {
    email: string;
    password: string;
}) => {
    const res = await axios.post<{
        token: string;
        expires_at: number;
        data: ApiAccountUserType | ApiMessageType;
    }>("/api/auth/user/login", data);
    return res.data;
};
