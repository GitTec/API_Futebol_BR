import { Text, Button } from 'react-native-paper'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

export default function Home() {
    const { navigate } = useNavigation();
    return <View>

        <Text>
            home
        </Text>

        <Button icon="camera" mode="contained" onPress={() => {
            //@ts-ignore
            navigate('Brasileirao')
        }}>
            Brasileirao

        </Button>
    </View>
}