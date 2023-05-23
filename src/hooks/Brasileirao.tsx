import { createContext, useContext, useEffect, useState } from "react";
import ChildrenProvider from './ChildrenProvider';
import { useLoading } from "./Loading";
import api from "../services/api-futebol";

interface BrasileiraoContextData {
    campeonato: ICampeonato | undefined
}

export const BrasileiraoContext = createContext({} as BrasileiraoContextData);

export const BrasileiraoProvider = ({ children }: ChildrenProvider) => {
    const [campeonato, setCampeonato] = useState<ICampeonato>();
    const { setCarregando } = useLoading()
    useEffect(() => {
        setCarregando(true)
        api.get('campeonatos/10').then((res) => {
            setCampeonato(res.data)
        }).finally(() => {
            setCarregando(false)
        })
    }, [])

    return(
        <BrasileiraoContext.Provider value={{
            campeonato
        }}>
            {children}
        </BrasileiraoContext.Provider>
    )
}
export const useBrasileirao=()=>useContext(BrasileiraoContext)