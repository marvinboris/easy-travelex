import { ModelTour } from "./tour";

export type ModelTourApplication = {
    id: number;
    tour_id?: number;
    tour?: ModelTour;
    name: string;
    customer_type: string;
    date: string;
    country: string;
    places?: string;
    persons: string;
    phone: string;
    passport: string;
    status: number;
    created_at: string;
    updated_at: string;
};
