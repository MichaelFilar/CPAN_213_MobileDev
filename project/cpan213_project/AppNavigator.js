import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import SavedJokesScreen from './screens/SavedJokesScreen';
import LogInScreen from './screens/LogInScreen';
import globalStyles from './shared/GlobalStyles';
import TabNavComponents from './screens/TabNavComponents';

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
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Group screenOptions={headerOptions}>
                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{ title: 'Joke Generator' }}
                            />
                            <Stack.Screen
                                name="LogIn"
                                component={LogInScreen}
                                options={{ title: 'Log In' }}
                            />
                            <Stack.Screen
                                name="SavedJokes"
                                component={SavedJokesScreen}
                                options={{ title: 'Saved Jokes' }}
                            />
                            <Stack.Screen
                                name="Summary"
                                component={SummaryScreen}
                                options={{ title: 'Summary' }}
                            />
                            <Stack.Screen component={TabNavComponents} name = 'TabNav' />
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default AppNavigator;
