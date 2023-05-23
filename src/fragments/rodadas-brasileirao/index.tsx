import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { IRodada } from "../../interfaces/rodada.interface";
import api from "../../services/api-futebol";
import { styles } from "./index.styles";
import { PlacarPartida } from "../../components/placar-partida";
import { useLoading } from "../../hooks/Loading";
import { useNavigation } from "@react-navigation/native";
import { useBrasileirao } from "../../hooks/Brasileirao";

export function RodadasBrasileirao() {
    const { setCarregando } = useLoading();
    const { navigate } = useNavigation();
    const { campeonato } = useBrasileirao();
    const [rodadaAtual, setRodadaAtual] = useState(campeonato?.rodada_atual.rodada)
    const [rodada, setRodada] = useState<IRodada>()

    useEffect(() => {
        setCarregando(true)
        api.get(`campeonatos/10/rodadas/${rodadaAtual}`).then((result) => {
            setRodada(result.data)
        }).finally(() => {
            setCarregando(false)
        })
    }, [rodadaAtual])

    return <View style={styles.container}>
        <View style={styles.detalhes}>
            <IconButton
                icon="arrow-left-bold-circle"
                size={35}
                disabled={!rodada?.rodada_anterior}
                onPress={() => setRodadaAtual((rodadaAtual ?? 1) - 1)}
            />
            <View style={styles.detalhesRodada}>
                <Text variant="titleLarge">{rodada?.nome}</Text>
                <Text variant="titleSmall">{rodada?.status}</Text>
            </View>
            <IconButton
                icon="arrow-right-bold-circle"
                size={35}
                disabled={!rodada?.proxima_rodada}
                onPress={() => setRodadaAtual((rodadaAtual ?? 1) + 1)}
            />
        </View>
        <FlatList
            data={rodada?.partidas}
            keyExtractor={partida => String(partida.partida_id)}
            renderItem={({ item }) => (
                <PlacarPartida
                    estadio={item.estadio.nome_popular}
                    data={item.data_realizacao}
                    hora={item.hora_realizacao}
                    timeMandante={{
                        escudo: item.time_mandante.escudo,
                        abrevicao: item.time_mandante.sigla,
                        placar: item.placar_mandante
                    }}
                    timeVisitante={{
                        escudo: item.time_visitante.escudo,
                        abrevicao: item.time_visitante.sigla,
                        placar: item.placar_visitante
                    }}
                    onPress={
                        () => {
                            //@ts-ignore
                            navigate("DetalhesPartida", { id_partida: item.partida_id })
                        }
                    }
                />
            )}
            ListHeaderComponent={<Text>{`⚽Partidas da rodada`}</Text>}
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%'
            }}
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
        />
    </View>
} 