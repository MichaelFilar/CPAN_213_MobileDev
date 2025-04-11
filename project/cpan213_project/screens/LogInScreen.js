import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import globalStyles from '../shared/GlobalStyles';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { logIn } from '../redux/actions';

const LogInScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const verifyLogIn = () => {
    if (username.length > 0) {
      dispatch(logIn(username));
      navigation.navigate("TabNav", { screen: "Profile" })
    } else {
      Alert.alert("Please enter a username.")
    }
  }

  return (
    <View style={globalStyles.container}>
            <View style={globalStyles.spacer}></View>
      <Text style={globalStyles.titleStyle}>Log In</Text>
      <StatusBar style="auto" />
      <View style={globalStyles.spacer}></View>
      <Text style={globalStyles.standardText}>Username: </Text>
      <TextInput
        style={globalStyles.inputStyle}
        onChangeText={(text) => setUsername(text)}
        placeholder='Username'
        autoCapitalize='words'
        keyboardType='name-phone-pad'
        maxLength={20}
      />
      <Text>Password: </Text>
      <TextInput
        secureTextEntry={true}
        style={globalStyles.inputStyle}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        autoCapitalize='words'
        keyboardType='name-phone-pad'
        maxLength={20}
      />

      <Button
        style={globalStyles.button}
        title='Log In'
        onPress={() => {
          verifyLogIn();
        }}
      />
      <View style={globalStyles.spacer}></View>
      <View style={globalStyles.spacer}></View>
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
  inputStyle: {
    fontSize: 24,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 50,
  }
});

export default LogInScreen;