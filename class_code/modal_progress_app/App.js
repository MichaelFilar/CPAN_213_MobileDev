import globalStyles from './shared/GlobalStyles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProgressExample from './screens/ProgressExample';

export default function App() {

  const [progress, setProgress] = useState(0);
  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>
      <ProgressExample />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

