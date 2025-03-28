import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import globalStyles from '../shared/GlobalStyles';

const SummaryScreen = ( {navigation, route} ) => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.tasksRoot.user)
    const jokeCounter = useSelector((state) => state.tasksRoot.counter)

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleStyle}>Log In</Text>
        <StatusBar style="auto" />

        <Text>Hello, {username}</Text> 

        <Text>Total jokes generated: {jokeCounter}</Text>

        <Text>Want to see your saved jokes?</Text>
        <Button 
            title='Saved Jokes'
            onPress={() => {
              navigation.navigate("SavedJokes")
            }}
        />

    </View>
  );
}

export default SummaryScreen;