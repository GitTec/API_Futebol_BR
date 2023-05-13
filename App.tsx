
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { expo } from './app.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </SafeAreaView >
  );
}

AppRegistry.registerComponent(expo.name, () => App);