import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [username, setUsername] = useState("")
  const [points, setPoints] = useState(0)

  const showAlert = () => {
    Alert.alert("Username: "+username+" with "+points+" points.")
  }

  return (

    

    <View style={styles.container}>
      <Text style={styles.titleStyle}>Lab 2 - Game onboarding form</Text>
      <StatusBar style="auto" />

      <TextInput 
        style = {styles.inputStyle}
        value={username}
        onChangeText={setUsername}
        placeholder='Enter your username'
        autoCapitalize='words'
        autoComplete='username'
        keyboardType='name-phone-pad'
        maxLength={20}
      />

      <TextInput 
        style = {styles.inputStyle}
        value={points}
        onChangeText={setPoints}
        placeholder='Enter your points'
        keyboardType='decimal-pad'
        maxLength={4}
      />  

      <Text>Username: {username}</Text>
      <Text>Points: {points}</Text>

      <Button
        title='Enter'
        onPress={showAlert}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
