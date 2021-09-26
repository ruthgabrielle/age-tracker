import { createContext, useContext } from "react";
import { InfoContext } from "../hooks/InfoContext";

export const InfoAgesContext = createContext([]);

export function InfoAgesProvider(){
    const { infos } = useContext(InfoContext);

    return infos
}