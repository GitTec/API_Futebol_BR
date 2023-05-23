import { FlatList, View, Alert, ToastAndroid } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useEffect, useState } from "react"
import api from "../../services/api-futebol";
import { IFase } from "../../interfaces/copadobrasil.interfaces";
import { PlacarPartida } from "../../components/placar-partida";
import { styles } from "./index.styles";
import { useCopaDoBrasil } from "../../hooks/CopaDoBrasil";

export function RodadaCopaDoBrasil() {

    const [fase, setFase] = useState<IFase>();
    const { copa } = useCopaDoBrasil();
    const [faseAtual, setFaseAtual] = useState<number>(0);

    useEffect(() => {
        ToastAndroid.show(`Abriu com ${faseAtual}`, ToastAndroid.LONG)
        if (faseAtual > 0) {
            api.get(`campeonatos/2/fases/${faseAtual}`).then((res) => {
                setFase(res.data)
            })
        }
    }, [faseAtual])

    useEffect(() => {
        if (copa)
            setFaseAtual(copa?.fase_atual.fase_id)
    }, [copa])

    return <View>
        <View style={styles.detalhes}>
            <IconButton
                icon="arrow-left-bold-circle"
                size={35}
                disabled={!fase?.fase_anterior}
                onPress={() => setFaseAtual(fase?.fase_anterior.fase_id ?? 1)}
            />
            <View style={styles.detalhesRodada}>
                <Text variant="titleLarge">{fase?.nome}</Text>
                <Text variant="titleSmall">{fase?.status}</Text>
            </View>
            <IconButton
                icon="arrow-right-bold-circle"
                size={35}
                disabled={!fase?.proxima_fase}
                onPress={() => setFaseAtual(fase?.proxima_fase.fase_id ?? 1)}
            />
        </View>

        <FlatList
            data={fase?.chaves}
            keyExtractor={(item) => {
                return item.nome
            }}
            renderItem={
                ({ item }) => {
                    return <View style={{
                        borderWidth: 2
                    }}>
                        <Text>
                            {
                                item.nome
                            }
                        </Text>
                        <PlacarPartida
                            data={item.partida_ida.data_realizacao}
                            hora={item.partida_ida.hora_realizacao}
                            estadio={item.partida_ida.estadio.nome_popular}
                            timeMandante={{
                                placar: item.partida_ida.placar_mandante,
                                abrevicao: item.partida_ida.time_mandante.sigla,
                                escudo: item.partida_ida.time_mandante.escudo
                            }}
                            timeVisitante={{
                                placar: item.partida_ida.placar_visitante,
                                abrevicao: item.partida_ida.time_visitante.sigla,
                                escudo: item.partida_ida.time_visitante.escudo
                            }}
                        />
                        <PlacarPartida
                            data={item.partida_volta.data_realizacao}
                            hora={item.partida_volta.hora_realizacao}
                            estadio={item.partida_volta.estadio.nome_popular}
                            timeMandante={{
                                placar: item.partida_volta.placar_mandante,
                                abrevicao: item.partida_volta.time_mandante.sigla,
                                escudo: item.partida_volta.time_mandante.escudo
                            }}
                            timeVisitante={{
                                placar: item.partida_volta.placar_visitante,
                                abrevicao: item.partida_volta.time_visitante.sigla,
                                escudo: item.partida_volta.time_visitante.escudo
                            }}
                        />
                    </View>
                }
            }
        />
        {/* {
            fase?.chaves.map((chave) => {
                return <View style={{
                    borderWidth: 2
                }}>
                    <Text>
                        {
                            chave.nome
                        }
                    </Text>

                    <PlacarPartida
                        data={chave.partida_ida.data_realizacao}
                        hora={chave.partida_ida.hora_realizacao}
                        estadio={chave.partida_ida.estadio.nome_popular}
                        timeMandante={{
                            placar: chave.partida_ida.placar_mandante,
                            abrevicao: chave.partida_ida.time_mandante.sigla,
                            escudo: chave.partida_ida.time_mandante.escudo
                        }}
                        timeVisitante={{
                            placar: chave.partida_ida.placar_visitante,
                            abrevicao: chave.partida_ida.time_visitante.sigla,
                            escudo: chave.partida_ida.time_visitante.escudo
                        }}
                    />
                    <PlacarPartida
                        data={chave.partida_volta.data_realizacao}
                        hora={chave.partida_volta.hora_realizacao}
                        estadio={chave.partida_volta.estadio.nome_popular}
                        timeMandante={{
                            placar: chave.partida_volta.placar_mandante,
                            abrevicao: chave.partida_volta.time_mandante.sigla,
                            escudo: chave.partida_volta.time_mandante.escudo
                        }}
                        timeVisitante={{
                            placar: chave.partida_volta.placar_visitante,
                            abrevicao: chave.partida_volta.time_visitante.sigla,
                            escudo: chave.partida_volta.time_visitante.escudo
                        }}
                    />
                </View>
            })
        } */}
    </View>
}