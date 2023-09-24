import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Home } from './src/screens/Home';
import { styles } from './src/styles/global';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Home />
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
}

