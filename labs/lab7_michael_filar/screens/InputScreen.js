import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const InputScreen = ( {navigation, route} ) => {

  const [quantity, setQuantity] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Lab 5 - Navigation</Text>
      <StatusBar style="auto" />

      <Text>Enter the quantity of items you're buying.</Text>
      <TextInput 
        style = {styles.inputStyle}
        value={quantity}
        onChangeText={setQuantity}
        placeholder='Enter your quantity'
        keyboardType='decimal-pad'
        maxLength={4}
      />  

      <Button
        title='Enter Quantity'
        onPress={() => {
          navigation.navigate("Calculation", {quantity: quantity})
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

export default InputScreen;