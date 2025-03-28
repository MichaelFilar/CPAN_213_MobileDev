import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "./shared/GlobalStyles";
import AppNavigator from './nav/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>
      <AppNavigator />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
