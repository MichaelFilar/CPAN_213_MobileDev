import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, KeyboardAvoidingView } from 'react-native';
import React, {Component, useState, useEffect } from 'react';


export default function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0.0)

  const calcBMI = () => {
      if (weight < 0) {
        Alert.alert("Invalid Weight.")
        return;
      }
      if (height > 3) {
        Alert.alert("Invalid Height.")
        return;
      } 
      if (weight/(height**2) > 30.0) {
        Alert.alert("Obesity")
      } else if (weight/(height**2) > 25.0) {
        Alert.alert("Overweight")
      } else if (weight/(height**2) > 18.5) {
        Alert.alert("Normal weight")
      } else {
        Alert.alert("Underweight")
      }

    }

  const resetState = () => {
    setHeight(0);
    setWeight(0);
  }

  return (
    
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 1}}></View>
      <View style={styles.uiContainer}>
        <View style={{flex: 1}}></View>
        <Text adjustsFontSizeToFit numberOfLines={2}
              style={{fontSize: 19,
                      flex: 2,
                      textAlign: 'center',
                      marginVertical: 8,
                      marginHorizontal: 8,
                      }}>
                        Enter your height and weight to calculate your BMI.</Text>
        <TextInput adjustsFontSizeToFit
                style = {styles.inputStyle}
                value={weight}
                onChangeText={setWeight}
                placeholder='Enter your weight (kg)'
                keyboardType='decimal-pad'
                maxLength={4}
        />

        <TextInput adjustsFontSizeToFit
                style = {styles.inputStyle}
                value={height}
                onChangeText={setHeight}
                placeholder='Enter your height (m)'
                keyboardType='decimal-pad'
                maxLength={4}
        />  
      </View>
      <View style={{flex: 1, 
                    backgroundColor: 'aliceblue',
                    alignItems: 'stretch',
                    rowGap: '3%' }}>
        <Button
                title='Calculate'
                onPress={calcBMI}
                color="darkblue"
        />
        <Button
                title='Reset'
                onPress={resetState}
                
        />
      </View>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  uiContainer: {
    flex: 1, 
    alignSelf: 'center', 
    alignItems: 'stretch', 
    justifyContent: 'space-evenly', 
    backgroundColor: 'lightblue',
    padding: 5,
    margin: 0
  },
  inputStyle:{
    flex: 1,
    color: 'black',
    borderColor: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: '3%',
    marginVertical: '1%',
    width: '300',
  }
});
