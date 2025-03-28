import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';
import globalStyles from "./shared/GlobalStyles";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { convertTemp, updateTemp } from './redux/actions.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function TempForm() {
  const inTemp = useSelector((state) => state.tasksRoot.inTemp)
  const convertedTemp = useSelector((state) => state.tasksRoot.outTemp)
  const dispatch = useDispatch();

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleStyle}>Lab 7 - Redux</Text>
        <StatusBar style="auto" />

        <TextInput 
                style = {globalStyles.inputStyle}
                onChangeText={(text) => dispatch(updateTemp(text))}
                placeholder='Enter the temperature'
                autoCapitalize='words'
                keyboardType='decimal-pad'
                maxLength={20}
        />

        <Button 
          style = {globalStyles.button}
          title="Convert Celsius to Fahrenheit"
          onPress={() => {dispatch(convertTemp())}}
        />

        <Text style={globalStyles.standardText}>Converted temperature:</Text>
        <Text style={globalStyles.outputText}>{convertedTemp ? convertedTemp : 0} F</Text>
      </View>
      </SafeAreaView>
      </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TempForm />
    </Provider>
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
