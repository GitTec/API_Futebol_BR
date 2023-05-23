import { Image, View } from "react-native";
import { styles } from "./index.styles"
import { Text } from "react-native-paper";
import { useCopaDoBrasil } from "../../hooks/CopaDoBrasil";

export function SobreCopaDoBrasil() {
    const { copa } = useCopaDoBrasil();

    return <View style={styles.container}>
        <Text variant="titleLarge">{copa?.nome}</Text>
        <Text variant="titleMedium">{copa?.nome_popular}</Text>
        <Image
            source={{ uri: copa?.logo }}
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