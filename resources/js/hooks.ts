import { useLayoutEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, AppState } from './store'

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useLayoutEffect(() => {
        handleSize();

        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    return windowSize;
};


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
