import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ScrollView,} from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "../shared/GlobalStyles";

const SignInScreen = ( {navigation, route} ) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const confirmLogin = () => {
    if (username == 'Admin') {
      if (password == 'Admin') {
        navigation.navigate("Dashboard", {username: username})
      } else {
        Alert.alert("Invalid username or password.")
      }
    } else {
      Alert.alert("Invalid username or password.")
    }
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={globalStyles.container}>
      <Text style={styles.titleStyle}>Assignment 2 - Navigation</Text>
      <StatusBar style="auto" />
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Username:</Text>
        <TextInput 
          autoCapitalize='false'
          style = {globalStyles.inputStyle}
          value={username}
          onChangeText={setUsername}
          placeholder='username'
          keyboardType='text'
          maxLength={30}
        />  

        <Text style={globalStyles.label}>Password:</Text>
        <TextInput 
          autoCapitalize='false'
          secureTextEntry={true}
          style = {globalStyles.inputStyle}
          value={password}
          onChangeText={setPassword}
          placeholder='password'
          keyboardType='password'
          maxLength={30}
        />
        <TouchableOpacity
            style = {globalStyles.button}
            onPress={() => {
                confirmLogin();
            }}
        >
            <Text style = {globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
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

export default SignInScreen;