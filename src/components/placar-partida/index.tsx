import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { styles } from "./index.styles";

interface Props {
    estadio: string;
    data: string;
    hora: string;
    timeMandante: TimePlacar;
    timeVisitante: TimePlacar;
}

interface TimePlacar {
    escudo: string;
    abrevicao: string;
    placar: number;
}

export function PlacarPartida(props: Props) {
    return <View style={styles.container}>

        <Text variant="labelSmall">{props.estadio} {props.data} {props.hora}</Text>
        <View style={styles.placar}>
            <Avatar.Image size={30} source={{
                uri: props.timeMandante.escudo
            }} />
            <Text variant="bodyLarge">{props.timeMandante.abrevicao} {' '}</Text>
            <Text variant="bodyLarge">{props.timeMandante.placar} X {props.timeVisitante.placar}</Text>
            <Text variant="bodyLarge">{'  '}{props.timeVisitante.abrevicao}</Text>
            <Avatar.Image size={ 30 } source={{
                uri: props.timeVisitante.escudo
            }} />
        </View>
    </View>
} 