import { ScrollView, View } from "react-native"
import { ActivityIndicator, DataTable, Text } from 'react-native-paper'
import { ITimeClassificacao } from '../../interfaces/brasileirao.interfaces'
import { useState, useEffect } from "react"
import { styles } from "./index.styles"
import api from "../../services/api-futebol"

export function TabelaBrasileirao() {
    const [classificacao, setClassificacao] = useState<ITimeClassificacao[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.get('campeonatos/10/tabela').then((result) => {
            setClassificacao(result.data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    return <ScrollView>
        <View style={styles.container}>
            <Text variant="titleLarge">Classificação Brasileirão</Text>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Clas.</DataTable.Title>
                    <DataTable.Title>Time</DataTable.Title>
                    <DataTable.Title>Pnts</DataTable.Title>
                    <DataTable.Title>Jgs</DataTable.Title>
                    <DataTable.Title>V</DataTable.Title>
                    <DataTable.Title>E</DataTable.Title>
                    <DataTable.Title>D</DataTable.Title>
                    <DataTable.Title>SG</DataTable.Title>
                    <DataTable.Title>Aprv(%)</DataTable.Title>
                </DataTable.Header>
                {isLoading && <ActivityIndicator animating={true} size={80} />}
                {
                    classificacao.map((row) => {
                        return <DataTable.Row key={row.time.time_id}>
                            <DataTable.Cell>{row.posicao}</DataTable.Cell>
                            <DataTable.Cell>{row.time.nome_popular}</DataTable.Cell>
                            <DataTable.Cell>{row.pontos}</DataTable.Cell>
                            <DataTable.Cell>{row.jogos}</DataTable.Cell>
                            <DataTable.Cell>{row.aproveitamento}</DataTable.Cell>
                            <DataTable.Cell>{row.vitorias}</DataTable.Cell>
                            <DataTable.Cell>{row.empates}</DataTable.Cell>
                            <DataTable.Cell>{row.derrotas}</DataTable.Cell>
                            <DataTable.Cell>{row.saldo_gols}</DataTable.Cell>
                        </DataTable.Row>
                    })

                }
            </DataTable>
        </View>
    </ScrollView>
}