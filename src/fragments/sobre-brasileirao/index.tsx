import { useBrasileirao } from "../../hooks/Brasileirao";
import { Image, View } from "react-native";
import { styles } from "./index.styles"
import { Text } from "react-native-paper";

export function SobreBrasileirao() {
    const { campeonato } = useBrasileirao();

    return <View style={styles.container}>
        <Text variant="titleLarge">{campeonato?.nome}</Text>
        <Text variant="titleMedium">{campeonato?.nome_popular}</Text>
        <Image
            source={{ uri: campeonato?.logo }}
            style={{
                width: 200,
                height: 200,
                margin: 5,
                padding: 5
            }}
        />
        <Text variant="bodySmall">Dados provenientes da API FUTEBOL</Text>
    </View>
}