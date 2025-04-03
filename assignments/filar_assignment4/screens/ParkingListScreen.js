import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import globalStyles from '../shared/GlobalStyles';
import { fetchParking } from '../redux/actions';

/*
useSelector - hook to access the state from redux store
useDispatch - hook to dispatch actions to the store
*/

const ParkingListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Subscribe to Firestore data on component mount
    const taskListener = dispatch(fetchParking())
    
    // top listening to data when the component unmount
    return () => taskListener
  }, [dispatch]);

  //use the state listOfTasks from taskReducer using useSelector
  const parkingList = useSelector((state) => state.tasksRoot.parkingList)
  //example
  // const userList = useSelector((state) => state.userReducer.numOfUsers)

  return (
    <View style={globalStyles.container}>
      
      {
      (parkingList && (parkingList.length > 0)) ? (
        <FlatList
          data={parkingList}
          
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            item != undefined ?
            <View style={globalStyles.listItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Parking Details', {parkingId: item.id})}
              >
                <Text style={globalStyles.standardText}>
                  {item.parkDate}
                </Text>
              </TouchableOpacity>
              <View style={globalStyles.buttonContainer}>
              </View>
            </View> : null
          )}
        />
        ) : (
          <Text>No parking added yet! Go add some!</Text>
        )
      }
      <TouchableOpacity style={globalStyles.addButton} onPress={() => navigation.navigate('Add Parking')}>
        <Text style={globalStyles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ParkingListScreen;


