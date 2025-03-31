import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editParking } from '../redux/actions';
import { Dropdown } from 'react-native-element-dropdown';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../shared/GlobalStyles';

const EditParkingScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const { parkingId } = route.params;

    const DURATIONS = ['1-hour or less', '4-hour', '12-hour','24-hour'];

    const formattedDurations = DURATIONS.map( (item) => ( {label: item, value: item} ))

    //get the existing parking from the redux store
    const parking = useSelector((state) => state.tasksRoot.parkingList.find((parking) => parking.id === parkingId))

    const [parkingDate, setParkingDate] = useState(new Date().toString());
    const [parkDuration, setParkDuration] = useState(parking.parkDuration);
    const [licensePlate, setLicensePlate] = useState(parking.licensePlate);
    const [parkLocation, setParkLocation] = useState(parking.parkLocation);
    const [buildingCode, setBuildingCode] = useState(parking.buildingCode);

    const handleEditParking = () => {
        const updatedParking = { ...parking, parkingDate: parkingDate, 
                                            parkDuration: parkDuration, 
                                            licensePlate: licensePlate, 
                                            parkLocation: parkLocation,
                                            buildingCode: buildingCode 
        };
        console.log(`updatedToParking : ${JSON.stringify(updatedParking)}`);

        dispatch(editParking(updatedParking));

        navigation.goBack();
    };

    return (
        <View style={globalStyles.container}>
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
                    {Platform.OS === 'android' ?
                        (
                            <Picker
                                selectedValue={parkDuration}
                                onValueChange={(value) => setParkDuration(value)}
                                style={globalStyles.picker}
                            >
                                {
                                    DURATIONS.map((element) => (
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
                                onChange={(item) => { setParkDuration(item.value) }}
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
            </View>
            <Button title="Update" onPress={handleEditParking} />
        </View>
    );
};

export default EditParkingScreen;
