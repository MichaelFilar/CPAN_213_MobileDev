import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookRoom } from '../redux/actions';

const BookingScreen = ({navigation, route}) => {

    const roomNum = route.params.roomNum;
    const name = route.params.name;
    const studentID = route.params.studentID;
    const numberOfPeople = route.params.numberOfPeople;
    const [booked, setBooked] = useState(false);
    const [available, setAvailable] = useState(false);

    const dispatch = useDispatch();

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
                Alert.alert("Room Available! Press the button if you wish to confirm booking.")
                setAvailable(true);
                return;
            }
        
        });
    }

    const handleBookRoom = () => {
        setBooked(true);
        const roomBooking = {
            roomNum: roomNum,
            numPeeps: numberOfPeople
        };

        dispatch(bookRoom(roomBooking));
    }

    useEffect(() => {
        if (booked != true) {
            checkRoom();
        }
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
                        
                        {available ? 
                        (<View><Text style={styles.info}>You haven't booked the selected room yet.</Text>
                        <Button
                            style={globalStyles.button}
                            title="Book Room"
                            onPress={() => {handleBookRoom()}}
                        /></View>) : (<Text style={styles.info}>Please return to the previous screen to book a room.</Text>) }
                    </View>
                )}
                <View style={globalStyles.container}>
                <Text>If you wish to see all your bookings.</Text>
                
                <Button 
                    title="Booked Rooms"
                    onPress={() => {
                        navigation.navigate("Room List")}
                    }
                />
                </View>
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
        textAlign: "center",
    },
    idText: {
        fontSize: 12,
    }
})

export default BookingScreen;