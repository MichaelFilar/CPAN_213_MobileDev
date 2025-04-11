import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import globalStyles from '../shared/GlobalStyles';

const SummaryScreen = ( {navigation, route} ) => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.tasksRoot.user)
    const jokeCounter = useSelector((state) => state.tasksRoot.counter)
    const loggedIn = useSelector((state => state.tasksRoot.loggedIn))

    useEffect(() => {
      if (!loggedIn) {
        navigation.navigate("Log In")
      }
    })

  return (
    <View style={globalStyles.container}>
      {(!loggedIn) ? (<View style={globalStyles.container}><Text>Loading...</Text></View>) : 
        (<View style={globalStyles.container}><Text style={globalStyles.titleStyle}>Profile</Text>
        <StatusBar style="auto" />
        <View style={globalStyles.spacer}></View>
        <Text style={globalStyles.greeting}>Hello, {username}</Text> 

        <Text style={globalStyles.standardText}>Total jokes generated: {jokeCounter}</Text>
        <View style={globalStyles.spacer}></View>
        <Text style={globalStyles.standardText}>Want to see your saved jokes?</Text>
        <Button 
            title='Saved Jokes'
            onPress={() => {
              navigation.navigate("Saved Jokes")
            }}
        /><View style={globalStyles.spacer}></View></View>)}

    </View>
  );
}

export default SummaryScreen;