import { StyleSheet, View} from 'react-native';
import TicTacToeScreen from './screens/TicTacToeScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// npm install react-native-safe-area-context

export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.container}>
          {/*<TicTacToeScreen />*/}
          <HomeScreen />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
