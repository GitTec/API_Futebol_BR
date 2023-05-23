import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "./index.styles";

interface Props {
    estadio: string;
    data: string;
    hora: string;
    timeMandante: TimePlacar;
    timeVisitante: TimePlacar;
    onPress?: () => void
}

interface TimePlacar {
    escudo: string;
    abrevicao: string;
    placar: number;
}

export function PlacarPartida(props: Props) {
    return <TouchableOpacity onPress={() => {
        if (props.onPress)
            props.onPress()
    }}>
        <View style={styles.container}>
            <Text variant="labelSmall">{props.estadio} {props.data} {props.hora}</Text>
            <View style={styles.placar}>
                <Text variant="bodyLarge">{props.timeMandante.abrevicao} {' '}</Text>
                <Text variant="bodyLarge">{props.timeMandante.placar} X {props.timeVisitante.placar}</Text>
                <Text variant="bodyLarge">{'  '}{props.timeVisitante.abrevicao}</Text>
            </View>
        </View>
    </TouchableOpacity>
} 