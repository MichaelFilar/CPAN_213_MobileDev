import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

const BookingScreen = ({navigation, route}) => {

    const roomNum = route.params.roomNum;
    const name = route.params.name;
    const studentID = route.params.studentID;
    const numberOfPeople = route.params.numberOfPeople;
    const [booked, setBooked] = useState(false)

    const rooms = [
        {roomNumber : 'A101', capacity : 5, available: true},
        {roomNumber : 'A102', capacity : 10, available: false},
        {roomNumber : 'A103', capacity : 8, available: false},
        {roomNumber : 'A104', capacity : 10, available: true},
        {roomNumber : 'A105', capacity : 7, available: true}
        ]

    const checkRoom = () => {
        rooms.forEach(item => {
            if (roomNum == item.roomNumber) {
                if (item.available != true) {
                    Alert.alert("Room not available.");
                    return;
                }
                if (numberOfPeople > item.capacity) {
                    Alert.alert("Too many people.");
                    return;
                }
                Alert.alert("Room booked!")
                setBooked(true);
                return;
            }
        
        });
    }

    useEffect(() => {
        checkRoom();
    })

    return(
        <SafeAreaProvider>
        <SafeAreaView style={globalStyles.safeArea}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>Booking Screen</Text>
            
                
                { booked === true ? (
                    <View style={globalStyles.container}>
                        <Text style={styles.greeting}>Hello {name}!</Text>
                        <Text style={styles.idText}>ID: {studentID}</Text>
                        <Text style={styles.info}></Text>
                        <Text style={styles.info}>Booking info:</Text>
                        <Text style={styles.info}>Room Number: {roomNum}</Text>
                        <Text style={styles.info}>People booked: {numberOfPeople}</Text>
                    </View>
                ) : (
                    <View style={globalStyles.container}>
                        <Text style={styles.greeting}>Hello {name}!</Text>
                        <Text style={styles.idText}>ID: {studentID}</Text>
                        <Text style={styles.info}></Text>
                        <Text style={styles.info}>You are currently not booked</Text>
                    </View>
                )}
            

        </View>
        </ScrollView>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    greeting: {
    fontSize: 25,
    fontWeight: "bold",
    },
    info: {
        fontSize: 20,
    },
    idText: {
        fontSize: 12,
    }
})

export default BookingScreen;