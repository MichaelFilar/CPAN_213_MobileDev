import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "./shared/GlobalStyles";
import AppNavigator from './nav/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
