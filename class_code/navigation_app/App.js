import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "./shared/GlobalStyles";
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import TabNavComponents from './screens/TabNavComponents';

/*

to use React Navigation library
npm install @react-navigation/native

to use expo project with ReactNavigation
npm install react-native-screens react-native-safe-area-context

for Stack navigation
npm install @react-navigation/native-stack

for bottom tab navigation
npm install @react-navigation/bottom-tabs

for icons
npm install --save react-native-vector-icons

*/


//create instance of Stack to perform Stack Navigation
const Stack = createNativeStackNavigator()

export default function App() {

  const headerOptions = ({navigation, route}) => (
    {
      headerStyle : {
        backgroundColor: 'indigo'
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
          <Text style = { {color: 'white'} }>Logout</Text>
        </TouchableOpacity>
      )
    }
  )

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>

          <Stack.Group screenOptions={headerOptions}>

            <Stack.Screen component={AboutScreen} name="About"/>
            <Stack.Screen component={HomeScreen} name="Home" initialParams={ {username: "test"}}/>
            
            <Stack.Screen 
              component={ContactScreen} 
              name="Contacts"
              initialParams={
                { country: "NA", city: "NA" }
              }
              // initialParams is used to set default values for route params
              // it will be used only if the route params not provided by ancestor (previous screen)
            />

            <Stack.Screen component={TabNavComponents} name = 'TabNav' />

          </Stack.Group>

        </Stack.Navigator>

      </NavigationContainer>

    </SafeAreaView>
    </SafeAreaProvider>
  );
}


    {/* <View style={globalStyles.container}>
      <HomeScreen />
    </View>
    <View style={globalStyles.spacer} /> */}