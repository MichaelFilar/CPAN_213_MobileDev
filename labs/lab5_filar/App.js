import { Button, StyleSheet, Text, TouchableOpacity, View, useState } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "./shared/GlobalStyles";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InputScreen from './screens/InputScreen';
import CalculationScreen from './screens/CalculationScreen';
import BillScreen from './screens/BillScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  const headerOptions = ({navigation, route}) => (
      {
        headerStyle : {
          backgroundColor: 'darkblue'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }
    )

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName='Input'>

          <Stack.Group screenOptions={headerOptions}>

            <Stack.Screen component={InputScreen} name="Input"/>
            <Stack.Screen component={CalculationScreen} name="Calculation" />
            <Stack.Screen component={BillScreen} name="Billing" />
          

          </Stack.Group>

        </Stack.Navigator>

      </NavigationContainer>

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
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  inputStyle:{
    fontSize: 24,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 50,
  }
});
