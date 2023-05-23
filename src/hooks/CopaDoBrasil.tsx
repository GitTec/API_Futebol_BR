import { createContext, useContext, useEffect, useState } from "react";
import ChildrenProvider from './ChildrenProvider';
import { useLoading } from "./Loading";
import api from "../services/api-futebol";

interface CopaDoBrasilContextData {
    copa: ICampeonato | undefined
}

export const CopaDoBrasilContext = createContext({} as CopaDoBrasilContextData);

export const CopaDoBrasilProvider = ({ children }: ChildrenProvider) => {
    const [copa, setCopa] = useState<ICampeonato>();
    const { setCarregando } = useLoading()
    useEffect(() => {
        setCarregando(true)
        api.get('campeonatos/2').then((res) => {
            setCopa(res.data)
        }).finally(() => {
            setCarregando(false)
        })
    }, [])

    return(
        <CopaDoBrasilContext.Provider value={{
            copa
        }}>
            {children}
        </CopaDoBrasilContext.Provider>
    )
}
export const useCopaDoBrasil=()=>useContext(CopaDoBrasilContext)