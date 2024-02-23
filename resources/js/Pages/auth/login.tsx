import { EnvelopeIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import AuthLayout, { Head } from "@/Components/auth/navigation/layout";
import Alert from "@/Components/frontend/ui/alert";
import Button from "@/Components/frontend/ui/form/button";
import Input from "@/Components/frontend/ui/form/input";
import { selectAuth, userLogin } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Status from "@/types/enums/status";

const params = {
    link: "/login",
    title: "Login | Easy Travelex",
    description: "Easy Travelex: User authentication page",
};

const AuthUserLoginPage = () => {
    const dispatch = useAppDispatch();
    const { token, status, message } = useAppSelector(selectAuth);

    const ref = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ref.current) return;

        const form = new FormData(ref.current);
        const email = form.get("email") as string;
        const password = form.get("password") as string;

        if (status !== Status.LOADING) dispatch(userLogin({ email, password }));
    };

    useEffect(() => {
        if (token) navigate("/admin");
    }, [navigate, token]);

    return (
        <AuthLayout>
            <form
                ref={ref}
                onSubmit={onSubmit}
                className="max-w-lg mx-auto px-5 md:px-0 min-h-[380px] flex flex-col relative z-10"
            >
                <Head {...params} />

                <div className="font-bold text-primary text-lg md:text-3xl text-center md:text-left mb-[17px] md:mb-[5px]">
                    Login
                </div>

                <div className="text-sm md:text-lg text-center md:text-left mb-[30px] md:mb-[22px]">
                    Sign in
                </div>

                <div className="px-3 md:px-0 overflow-auto mb-6 md:mb-[33px]">
                    <div className="grid gap-x-[17.34px] gap-y-[13.63px] mb-[22.8px]">
                        {message && (
                            <Alert color={message.type}>
                                {message.content}
                            </Alert>
                        )}
                        <Input
                            icon={EnvelopeIcon}
                            type="email"
                            name="email"
                            placeholder="E-mail address"
                        />
                        <Input
                            icon={LockOpenIcon}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <Button type="submit">
                        {status === Status.LOADING ? (
                            <div className="w-8 h-8 rounded-full border border-t-transparent border-white animate-spin" />
                        ) : (
                            "Continue"
                        )}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default AuthUserLoginPage;
