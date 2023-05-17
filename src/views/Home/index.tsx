import { Text, Button } from 'react-native-paper'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { styles } from "./index.styles"
import { cores } from '../../constants/colors';
import logo from "../../../assets/logo.png"

export function Home() {
    const { navigate } = useNavigation();
    return <View style={styles.container}>
        <Image
            source={
                logo
            }
            style={styles.imagemLogo}
        />
        <Text variant='titleLarge'>Futebol Brasileiro!</Text>
        <Text variant='titleMedium'>Seu APP de resultados do futebol BR</Text>

        <View style={styles.areaBotoes}>
            <Button
                icon="trophy"
                mode="contained"
                buttonColor={cores.verde}
                style={styles.botao}
                onPress={() => {
                    //@ts-ignore
                    navigate("Brasileirao")
                }}>
                Campeonato Brasileiro
            </Button>
            <Button
                icon="soccer"
                mode="contained"
                buttonColor={cores.azulClaro}
                style={styles.botao}
                onPress={() => {
                    console.log('Pressed')
                }}>
                Copa do Brasil
            </Button>

        </View>
    </View>
}