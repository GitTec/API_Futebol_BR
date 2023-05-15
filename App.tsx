
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { expo } from './app.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './src/routes/index.routes';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
      </PaperProvider>
    </SafeAreaView >
  );
}

AppRegistry.registerComponent(expo.name, () => App);