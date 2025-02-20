import { Button, StyleSheet, Text, TouchableOpacity, View, useState } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "./shared/GlobalStyles";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import BookingScreen from './screens/BookingScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  const headerOptions = ({navigation, route}) => (
      {
        headerStyle : {
          backgroundColor: 'white'
        },
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerRight: () => (
                <TouchableOpacity
                  onPress={ () => {
                    console.log("pressed")
                    navigation.dispatch(CommonActions.reset({
                      index: 0,
                      routes: [{name: "Sign In"}] //ideally should be reset to SignIn screen
                    }))
                    navigation.navigate("Sign In");
                  }}
                >
                  <Text style = { {color: 'black'} }>Logout</Text>
                </TouchableOpacity>
        )
      }
    )

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName='Sign In'>

          <Stack.Group screenOptions={headerOptions}>

            <Stack.Screen component={SignInScreen} name="Sign In"/>
            <Stack.Screen component={DashboardScreen} name="Dashboard" />
            <Stack.Screen component={BookingScreen} name="Booking" />
          

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
    backgroundColor: 'lightblue',
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
