export interface ITimeClassificacao{
    posicao: number;
    pontos: number;
    jogos: number;
    vitorias: number;
    derrotas: number;
    empates: number;
    gols_pro: number;
    gols_contra: number;
    saldo_gols: number;
    aproveitamento: number;
    ultimos_jogos: string[];
    time: ITime
}

export interface ITime{
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
}