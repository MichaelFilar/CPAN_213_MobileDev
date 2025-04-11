import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getJoke, saveJoke } from '../redux/actions';
import globalStyles from '../shared/GlobalStyles';

const HomeScreen = ( {navigation, route} ) => {
    const currentJoke = useSelector((state) => state.tasksRoot.currentJoke);
    const dispatch = useDispatch();


    const getJokeAPI = async () => {
        try {
            const response = await fetch(
                "https://icanhazdadjoke.com/",
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data.joke);
            dispatch(getJoke(data.joke));
        } catch (error) {
            console.error(error);
        }
    };

    const verifySave = () => {
        if (currentJoke.length > 0) {
        dispatch(saveJoke())
        } else {
            Alert.alert("No joke generated yet!")
        }
    }

  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleStyle}>Joke Generator</Text>
            <StatusBar style="auto" />
            <View style={globalStyles.spacer} />

            <Text style={globalStyles.standardText}>Press the button below to generate a joke!</Text>
            <View style={globalStyles.spacer} />
            <Button
                title='Generate Joke'
                onPress={() => {
                    getJokeAPI();
                }}
            />
        </View>
        <View style={globalStyles.textContainer}>
            <Text style={globalStyles.outputText}>{currentJoke}</Text>
        </View>
        <Button
                title='Save Joke'
                onPress={() => {
                    verifySave();
                }}
            />
        <View style={globalStyles.spacer} />

    </View>
  );
}

export default HomeScreen;