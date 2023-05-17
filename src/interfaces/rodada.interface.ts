import { ITime } from "./brasileirao.interfaces";

export interface IRodada {
    nome: string;
    rodada: number;
    status: string;
    proxima_rodada: IRodadaProximaEAnterior;
    rodada_anterior: IRodadaProximaEAnterior;
    partidas: IPartida[];
}

export interface IRodadaProximaEAnterior {
    nome: string;
    rodada: 5;
    status: string;
}

export interface IEstadio {
    estadio_id: number;
    nome_popular: string;
}

export interface IPartida {
    partida_id: number;
    time_mandante: ITime;
    time_visitante: ITime;
    placar_mandante: number;
    placar_visitante: number;
    disputa_penalti: boolean;
    status: string;
    data_realizacao: string;
    hora_realizacao: string;
    estadio: IEstadio;
    _link: string;
}
