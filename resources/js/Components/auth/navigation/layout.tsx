import { ReactNode, useEffect } from "react";
import { HeadProvider, Title, Meta, Link as HeadLink } from "react-head";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../ui/logo";

import { selectAuth } from "@/features/auth/authSlice";
import { useAppSelector } from "@/hooks";

interface LayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
    const { token } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate(`/admin`);
    }, [token]);

    return !token ? (
        <div className="overflow-hidden bg-gradient-to-t from-primary/50 to-primary relative z-0">
            <div className="bg-grid-white/[0.05] absolute inset-0 -z-10" />

            <div className="container mx-auto flex flex-col min-h-screen">
                <header className="pt-5">
                    <Link to="/" className="w-40 inline-flex">
                        <Logo />
                    </Link>
                </header>

                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="max-w-4xl w-full relative rounded-[40.8836px] bg-white shadow-lg text-secondary-700 pt-[44px] md:pt-[51px] pb-[50px] md:pb-[66px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export interface PageParams {
    link: string;
    title: string;
    description: string;
}

export const Head = ({ link, title, description }: PageParams) => (
    <HeadProvider>
        <Title>{title}</Title>
        <Meta name="description" content={description} />
        <HeadLink rel="canonical" href={location.origin + link} />

        <Meta property="og:title" content={title} />
        <Meta property="og:description" content={description} />
        <Meta property="og:url" content={link} />

        <Meta property="twitter:title" content={title} />
        <Meta property="twitter:description" content={description} />
    </HeadProvider>
);
