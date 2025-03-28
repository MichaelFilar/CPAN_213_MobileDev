import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/actions';
import globalStyles from '../shared/GlobalStyles';

/*
useSelector - hook to access the state from redux store
useDispatch - hook to dispatch actions to the store
*/

const RoomListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  //use the state listOfTasks from taskReducer using useSelector
  const roomList = useSelector((state) => state.tasksRoot.bookedRooms)
  //example
  // const userList = useSelector((state) => state.userReducer.numOfUsers)

  return (
    <View style={globalStyles.container}>
      
      {
      (roomList && (roomList.length > 0)) ? (
        <FlatList
          data={roomList}
          keyExtractor={(item) => item != undefined ? item.roomNum.toString() : null}
          renderItem={({ item }) => (
            item != undefined ?
            <View style={globalStyles.listItem}>
              <Text style={globalStyles.standardText}>
                {item.roomNum} - Booked for {item.numPeeps} people.
              </Text>
              <View style={globalStyles.buttonContainer}>
              <Button
                  title="Delete Booking"
                  onPress={() => {
                    dispatch(deleteBooking(item.roomNum));
                  }}
                />
              </View>
            </View> : null
          )}
        />
        ) : (
          <Text>No rooms booked yet</Text>
        )
      }

    </View>
  );
};

export default RoomListScreen;


