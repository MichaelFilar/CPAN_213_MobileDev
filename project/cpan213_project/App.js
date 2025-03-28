import { Button, StyleSheet, Text, TouchableOpacity, View, useState } from 'react-native';
import globalStyles from "./shared/GlobalStyles";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import AppNavigator from './AppNavigator.js';


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
