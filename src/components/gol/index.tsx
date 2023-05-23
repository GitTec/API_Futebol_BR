import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { IGolDetalhe} from "../../interfaces/rodada.interface";
import { styles } from "./index.styles";

interface Props {
    gol: IGolDetalhe
}

export function Gol({ gol }: Props) {
    return <View style={styles.container}>
        <View style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <Avatar.Icon size={24} icon={gol.penalti ? "shoe-cleat" : "soccer"} style={{
                backgroundColor: gol.gol_contra ? 'red' : 'green'
            }} />
            <Text>{gol.atleta.nome_popular}</Text>
        </View>
        <View>
            <Text>{`${gol.minuto} ${gol.periodo}`}</Text>
        </View>
    </View>
} 