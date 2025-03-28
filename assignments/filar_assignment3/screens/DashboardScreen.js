import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Platform, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from "../shared/GlobalStyles";
import { useState } from 'react';


const DashboardScreen = ({navigation, route}) => {

    const ROOMS = ['A101','A102','A103','A104','A105'];

    const formattedROOMS = ROOMS.map( (item) => ( {label: item, value: item} ))

    const { username } = route.params
    const [studentID, setStudentID] = useState("123");
    const [name, setName] = useState("Joe");
    const [numPeeps, setNumPeeps] = useState(5);
    const [roomNum, setRoomNum] = useState("A101")

    const checkAvailability = () => {
        if (name != "" && studentID != "" && roomNum != "" && numPeeps > 0) {
            navigation.navigate("Booking",
            {
                roomNum: roomNum,
                studentID: studentID,
                name: name,
                numberOfPeople: numPeeps
            }
        )
        }
        
    }
    
    return(
        <SafeAreaProvider>
        <SafeAreaView style={globalStyles.safeArea}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container} >
            <Text style={globalStyles.titleStyle}>Hello, {username}</Text>
            <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>Study Room Booking</Text>

            <Text style={globalStyles.label}>Student ID: </Text>
                  <TextInput 
                    autoCapitalize='false'
                    style = {styles.inputStyle}
                    value={studentID}
                    onChangeText={setStudentID}
                    placeholder='ID'
                    keyboardType='text'
                    maxLength={30}
                  />
            
            <Text style={globalStyles.label}>Name: </Text>
                  <TextInput 
                    autoCapitalize='false'
                    style = {globalStyles.inputStyle}
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                    keyboardType='text'
                    maxLength={30}
                  />
            <Text style={globalStyles.label}>Number of people: </Text>
                  <TextInput 
                    autoCapitalize='false'
                    style = {globalStyles.inputStyle}
                    value={numPeeps}
                    onChangeText={setNumPeeps}
                    placeholder='#'
                    keyboardType='numeric'
                    maxLength={2}
                  />
            <Text style={globalStyles.label}>Room Numbers</Text>
            <View style={styles.horizontalContainer}>
                      { Platform.OS === 'android' ?
                          (
                            <Picker 
                              selectedValue={roomNum} 
                              onValueChange={ (value) => setRoomNum(value)}
                              style={styles.picker}
                            >
                              {
                                ROOMS.map( (element) => (
                                  <Picker.Item label={element} value={element} key={element} />
                                ))
                              }
                            </Picker>
                          ) : (
                            <Dropdown 
                              style={styles.dropdown}
                              data={formattedROOMS}
                              labelField='label'
                              valueField='value'
                              value={roomNum}
                              onChange={ (item) => {setRoomNum(item.value)}}
                            />
            )}
            </View>
            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    checkAvailability();
                }}
            >
                <Text style = {globalStyles.buttonText}>Check Availability</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    navigation.dispatch(CommonActions.reset({
                                          index: 0,
                                          routes: [{name: "Sign In"}] //ideally should be reset to SignIn screen
                                        }))
                }}
            >
                <Text style = {globalStyles.buttonText}>Logout</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    )
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
      backgroundColor: 'aliceblue',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      height: 50,
      width: "50%",
      alignItems: "center",
      backgroundColor: "white"
    },
    picker: {
      flex: 1,
      height: 50,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
    },
    dropdown: {
      height: 50,
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    horizontalContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
  });

export default DashboardScreen;