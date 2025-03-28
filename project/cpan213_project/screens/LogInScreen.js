import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import globalStyles from '../shared/GlobalStyles';

const LogInScreen = ( {navigation, route} ) => {

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleStyle}>Log In</Text>
      <StatusBar style="auto" />

      <Text>Username: </Text>
      <TextInput 
                style = {globalStyles.inputStyle}
                onChangeText={(text) => dispatch(logIn(text))}
                placeholder='Enter the temperature'
                autoCapitalize='words'
                keyboardType='decimal-pad'
                maxLength={20}
        />  

      <Button
        style={globalStyles.button}
        title='Log In'
        onPress={() => {
          navigation.navigate("Summary")
        }}
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

export default LogInScreen;