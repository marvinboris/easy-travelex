import { ModelVisa } from "./visa";

export type ModelVisaApplication = {
    id: number;
    visa_id: number;
    visa?: ModelVisa;
    name: string;
    customer_type: string;
    expiry_date: string;
    country: string;
    email: string;
    phone: string;
    passport: string;
    profile: string;
    doc: string;
    status: number;
    created_at: string;
    updated_at: string;
};
