import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView, Platform } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addParking } from '../redux/actions';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';

const AddParkingScreen = ({ navigation, route }) => {

    const DURATIONS = ['1-hour or less', '4-hour', '12-hour','24-hour'];

    const formattedDurations = DURATIONS.map( (item) => ( {label: item, value: item} ))

    const [buildingCode, setBuildingCode] = useState("TEST1");
    const [parkDuration, setParkDuration] = useState('1-hour or less');
    const [licensePlate, setLicensePlate] = useState("TESTTEST");
    const [parkLocation, setParkLocation] = useState("1234 TEST STREET");
    const [parkDate, setParkDate] = useState(new Date().toString());

    const dispatch = useDispatch();

    const validateInfo = () => {
        let valid = true;
        let error = ``;
        if (buildingCode.length != 5) {
            error+=(`Building code is not 5 characters long.\n`)
            valid = false;
        }
        if (!parkDuration in DURATIONS) {
            error+=(`Parking duration not selected.\n`)
            valid = false;
        }
        if (licensePlate.length < 2 || licensePlate.length > 8) {
            error+=(`Invalid license plate.\n`)
            valid = false;
        }
        if (!parkLocation) {
            error+=(`Parking location not entered.\n`)
            valid = false;
        }
        if (!parkDate) {
            error+=(`Parking date not entered.\n`)
            valid = false;
        }
        if (valid) {Alert.alert('Submission accepted!'), handleParkingAdd()}
        else {Alert.alert('Submission denied',error)}
    }


    const handleParkingAdd = () => {
            const parkingListing = {
                buildingCode: buildingCode,
                parkDuration: parkDuration,
                licensePlate: licensePlate,
                parkLocation: parkLocation,
                parkDate: parkDate,
            };
    
            dispatch(addParking(parkingListing));
            navigation.goBack();
        }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.safeArea}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.headerStyle}>Add to your parking list</Text>
                        <View style={globalStyles.container}>     
                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={buildingCode}
                                onChangeText={setBuildingCode}
                                placeholder='Building Code'
                                keyboardType='text'
                                maxLength={5}
                            />
                            <View style={globalStyles.horizontalContainer}>
                            { Platform.OS === 'android' ?
                                          (
                                            <Picker 
                                              selectedValue={parkDuration} 
                                              onValueChange={ (value) => setParkDuration(value)}
                                              style={globalStyles.picker}
                                            >
                                              {
                                                DURATIONS.map( (element) => (
                                                  <Picker.Item label={element} value={element} key={element} />
                                                ))
                                              }
                                            </Picker>
                                          ) : (
                                            <Dropdown 
                                              style={globalStyles.dropdown}
                                              data={formattedDurations}
                                              labelField='label'
                                              valueField='value'
                                              value={parkDuration}
                                              onChange={ (item) => {setParkDuration(item.value)}}
                                            />
                                          )}
                            </View>

                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={licensePlate}
                                onChangeText={setLicensePlate}
                                placeholder='License Plate'
                                keyboardType='text'
                                maxLength={8}
                            />

                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={parkLocation}
                                onChangeText={setParkLocation}
                                placeholder='Location'
                                keyboardType='text'
                                maxLength={30}
                            />
                            <Button 
                                style = {globalStyles.button}
                                title="Add parking details"
                                onPress={() => {validateInfo()}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AddParkingScreen;