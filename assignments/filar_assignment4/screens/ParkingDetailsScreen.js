import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteParking, editParking } from '../redux/actions';
import globalStyles from '../shared/GlobalStyles';
import { useWindowDimensions } from 'react-native';


const ParkingDetailsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const { parkingId } = route.params;

    //get the existing parking from the redux store
    const parkingList = useSelector((state) => state.tasksRoot.parkingList);
    const parking = useSelector((state) => state.tasksRoot.parkingList.find((parking) => parking.id === parkingId))
    
    const [parkingDate, setParkingDate] = useState(parking?.parkDate);
    const [parkDuration, setParkDuration] = useState(parking?.parkDuration);
    const [licensePlate, setLicensePlate] = useState(parking?.licensePlate);
    const [parkLocation, setParkLocation] = useState(parking?.parkLocation);
    const [buildingCode, setBuildingCode] = useState(parking?.buildingCode);

    const handleDelete = (parkingId) => {
        Alert.alert(
          "Delete Task",
          "Are you sure you want to delete this parking?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              onPress: () => dispatch(deleteParking(parkingId)),
              style: "destructive",
            },
          ]
        );
        navigation.navigate("Parking List");
      };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.container}>
                    {(parkingList && (parkingList.length > 0)) ? (
                        <View>
                        <Text style={globalStyles.idText}>ID: {parkingId}</Text>
                        <Text style={globalStyles.info}></Text>
                        <Text style={globalStyles.info}>{`\n`}Parking Info:{`\n`}{`\n`}</Text>
                        <Text style={globalStyles.info}>{`\n`}Date of parking: {`\n`}{parkingDate}</Text>
                        <Text style={globalStyles.info}>{`\n`}Duration of parking: {`\n`}{parkDuration}</Text>
                        <Text style={globalStyles.info}>{`\n`}License Plate: {`\n`}{licensePlate}</Text>
                        <Text style={globalStyles.info}>{`\n`}Parked at: {`\n`}{parkLocation}</Text>
                        <Text style={globalStyles.info}>{`\n`}Building Code: {`\n`}{buildingCode}</Text>
                        </View>
                    ) : (
                        <Text>No data</Text>
                    )
                    }
            </View>
            <View style={globalStyles.horizontalContainer}>
                <Button title="Edit" onPress={() => navigation.navigate('Edit Parking', {parkingId: parkingId})} />
                <Button title="Delete" onPress={() => {handleDelete(parkingId)}} />
            </View>
            
        </View>
    );
};

export default ParkingDetailsScreen;
