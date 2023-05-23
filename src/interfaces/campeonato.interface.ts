interface ICampeonato{
    campeonato_id: number,
    nome: string,
    nome_popular: string,
    logo: string,
    fase_atual: IFase,
    rodada_atual: IRodadaAtual,
}

interface IFase{
    fase_id: number,
    nome: string,
    tipo: string,
    _link: string
}

interface IRodadaAtual{
    rodada: number,
    nome: string
}

