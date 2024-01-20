import { createContext, useContext } from "react";

const BackendContext = createContext<{
    menuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
}>({
    menuOpen: false,
    setMenuOpen: () => {},
});

export const useBackendContext = () => useContext(BackendContext);

export default BackendContext;
