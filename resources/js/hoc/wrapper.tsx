import { ReactNode, useCallback, useEffect, useState } from "react";
import { HeadProvider } from "react-head";

import { check, selectAuth } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Status from "@/types/enums/status";
import Theme from "@/types/enums/theme";
import { setAuthToken } from "@/utils";

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    const [loaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);

    const dispatch = useAppDispatch();
    const { token, status } = useAppSelector(selectAuth);

    useEffect(() => {
        if (status === Status.IDLE) {
            const isAuth = localStorage.getItem("token") !== null;
            if (!token && isAuth) dispatch(check());
            else if (token) setAuthToken(token);

            if ((token && isAuth) || !isAuth) setLoaded(true);
        }
    }, [token, dispatch, status]);

    useEffect(() => {
        const root = document.querySelector("html")!;
        if (theme === Theme.DARK) root.classList.add("dark");
        else root.classList.remove("dark");
    }, [theme]);

    return loaded ? (
        status === Status.LOADING ? (
            <div className="fixed inset-0 flex items-center justify-center">
                <img
                    src="/images/bg-screen.svg"
                    alt="BG Screen"
                    className="absolute inset-0 image-cover -z-10"
                />

                <div className="w-24 h-24 rounded-full border-[7px] border-primary border-t-primary/20 animate-spin" />
            </div>
        ) : (
            <>
                <HeadProvider>
                    <meta name="msapplication-TileColor" content="#283890" />
                    <meta
                        name="theme-color"
                        content={theme === Theme.DARK ? "#171717" : "#ffffff"}
                    />
                </HeadProvider>

                {theme != null && children}
            </>
        )
    ) : null;
}
