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
import TabNavComponent from './screens/TabNavComponents';

// Create a stack navigator
const Stack = createNativeStackNavigator();

const headerOptions = ({navigation, route}) => (
    {
      headerStyle : {
        backgroundColor: 'darkblue'
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    }
  )

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.safeArea}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="TabNav">
                        <Stack.Group screenOptions={headerOptions}>
                          <Stack.Screen component={TabNavComponent} name = 'TabNav' />
                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{ title: 'Joke Generator' }}
                            />
                            <Stack.Screen
                                name="Log In"
                                component={LogInScreen}
                                options={{ title: 'Log In' }}
                            />
                            <Stack.Screen
                                name="Saved Jokes"
                                component={SavedJokesScreen}
                                options={{ title: 'Saved Jokes' }}
                            />
                            <Stack.Screen
                                name="Profile"
                                component={SummaryScreen}
                                options={{ title: 'Profile' }}
                            />
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default AppNavigator;
