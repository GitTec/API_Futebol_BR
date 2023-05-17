import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { IRodada } from "../../interfaces/rodada.interface";
import api from "../../services/api-futebol";
import { styles } from "./index.styles";
import { PlacarPartida } from "../../components/placar-partida";

export function RodadasBrasileirao() {
    const [isLoading, setIsLoading] = useState(false)
    const [rodadaAtual, setRodadaAtual] = useState(1)
    const [rodada, setRodada] = useState<IRodada>()

    useEffect(() => {
        setIsLoading(true)
        api.get(`campeonatos/10/rodadas/${rodadaAtual}`).then((result) => {
            setRodada(result.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [rodadaAtual])

    return <ScrollView>
        <View style={styles.container}>
            <View style={styles.detalhes}>
                <IconButton
                    icon="arrow-left-bold-circle"
                    size={35}
                    disabled={!rodada?.rodada_anterior}
                    onPress={() => setRodadaAtual(rodadaAtual - 1)}
                />
                <View style={styles.detalhesRodada}>
                    <Text variant="titleLarge">{rodada?.nome}</Text>
                    <Text variant="titleSmall">{rodada?.status}</Text>
                </View>
                <IconButton
                    icon="arrow-right-bold-circle"
                    size={35}
                    disabled={!rodada?.proxima_rodada}
                    onPress={() => setRodadaAtual(rodadaAtual + 1)}
                />

            </View>
            {
                rodada?.partidas.map(partida => {
                    return <PlacarPartida
                        key={partida.partida_id}
                        estadio={partida.estadio.nome_popular}
                        data={partida.data_realizacao}
                        hora={partida.hora_realizacao}
                        timeMandante={{
                            escudo: partida.time_mandante.escudo,
                            abrevicao: partida.time_mandante.sigla,
                            placar: partida.placar_mandante
                        }}
                        timeVisitante={{
                            escudo: partida.time_visitante.escudo,
                            abrevicao: partida.time_visitante.sigla,
                            placar: partida.placar_visitante
                        }}
                    />
                })
            }
        </View>
    </ScrollView>
} 