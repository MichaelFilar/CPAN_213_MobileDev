import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from "./shared/GlobalStyles";

import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import BookingScreen from './screens/BookingScreen';
import RoomListScreen from './screens/RoomListScreen';


// Create a stack navigator
const Stack = createNativeStackNavigator();

const headerOptions = ({navigation, route}) => (
    {
      headerStyle : {
        backgroundColor: 'darkblue'
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          onPress={ () => {
            //reset navigation flow
            navigation.dispatch(CommonActions.reset({
              index: 0,
              routes: [ {name: "Home"} ] //ideally should be reset to SignIn screen
            }))
          }}
        >
          <Text style = { {color: 'white'} }>Home</Text>
        </TouchableOpacity>
      )
    }
  )

const AppNavigator = () => {
    return (
      <SafeAreaProvider>
      <SafeAreaView style={globalStyles.safeArea}>
  
        <NavigationContainer>
  
          <Stack.Navigator initialRouteName='Sign In'>
  
            <Stack.Group screenOptions={headerOptions}>
  
              <Stack.Screen component={SignInScreen} name="Sign In"/>
              <Stack.Screen component={DashboardScreen} name="Dashboard" />
              <Stack.Screen component={BookingScreen} name="Booking" />
              <Stack.Screen component={RoomListScreen} name="Room List" />
            
  
            </Stack.Group>
  
          </Stack.Navigator>
  
        </NavigationContainer>
  
      </SafeAreaView>
      </SafeAreaProvider>
    );
};

export default AppNavigator;
