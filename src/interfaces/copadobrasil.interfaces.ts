import { IPartida } from "./rodada.interface";

export interface IFase{
    nome:string;
    nome_popular:string;
    fase_id:number;
    status:string;
    eliminatorio: boolean;
    ida_e_volta: boolean;
    proxima_fase: IFasesAdjacentes;
    fase_anterior: IFasesAdjacentes;
    chaves:IPartidaChave[];
}

export interface IFasesAdjacentes{
    fase_id:number;
    nome:string;
}

export interface IPartidaChave{
    nome:string;
    partida_ida:IPartida;
    partida_volta:IPartida;
}

