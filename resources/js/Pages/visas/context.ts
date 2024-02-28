import React, { createContext, useContext } from "react";

const VisasContext = createContext<{
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}>({
    activeTab: "",
    setActiveTab: () => {},
});

export const useVisasContext = () => useContext(VisasContext);

export default VisasContext;
