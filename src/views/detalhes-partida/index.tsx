import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./index.styles";
import { useEffect, useState } from "react";
import { IPartida } from "../../interfaces/rodada.interface";
import { useLoading } from "../../hooks/Loading";
import api from "../../services/api-futebol";
import { PlacarPartida } from "../../components/placar-partida";
import { Gol } from "../../components/gol";

//@ts-ignore
export function DetalhesPartida({ route }) {

    const id_partida: number = route?.params?.id_partida;
    const [partida, setPartida] = useState<IPartida>()
    const { setCarregando } = useLoading()

    useEffect(() => {
        setCarregando(true)
        api.get(`partidas/${id_partida}`).then((result) => {
            setPartida(result.data)
        }).finally(() => {
            setCarregando(false)
        })
    }, [])


    return <View style={styles.container}>
        <Text>{partida?.rodada}</Text>
        <View style={{
            width: '100%',
        }}>

            <PlacarPartida
                key={ partida?.data_realizacao}
                estadio={partida?.estadio.nome_popular ?? ""}
                data={partida?.data_realizacao ?? ""}
                hora={partida?.hora_realizacao ?? ""}
                timeMandante={{
                    escudo: partida?.time_mandante.escudo ?? "",
                    abrevicao: partida?.time_mandante.sigla ?? "",
                    placar: partida?.placar_mandante ?? 0,
                }}
                timeVisitante={{
                    escudo: partida?.time_visitante.escudo ?? "",
                    abrevicao: partida?.time_visitante.sigla ?? "",
                    placar: partida?.placar_visitante ?? 0,
                }}
            />
        </View>

        <View style={styles.areagols}>
            <View style={styles.gols}>
                {
                    partida?.gols.mandante.map(gol => {
                        return <Gol gol={gol} />
                    })
                }

            </View>
            <View style={styles.gols}>
                {
                    partida?.gols.visitante.map(gol => {
                        return <Gol gol={gol} />
                    })
                }
            </View>
        </View>

    </View>
} 