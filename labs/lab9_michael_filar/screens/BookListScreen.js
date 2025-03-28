import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from '../redux/actions';
import globalStyles from '../shared/GlobalStyles';
import { fetchBooks } from '../redux/actions';

/*
useSelector - hook to access the state from redux store
useDispatch - hook to dispatch actions to the store
*/

const BookListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Subscribe to Firestore data on component mount
    const taskListener = dispatch(fetchBooks())
    
    // top listening to data when the component unmount
    return () => taskListener
  }, [dispatch]);

  //use the state listOfTasks from taskReducer using useSelector
  const bookList = useSelector((state) => state.tasksRoot.bookList)
  //example
  // const userList = useSelector((state) => state.userReducer.numOfUsers)

  return (
    <View style={globalStyles.container}>
      
      {
      (bookList && (bookList.length > 0)) ? (
        <FlatList
          data={bookList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            item != undefined ?
            <View style={globalStyles.listItem}>
              <Text style={globalStyles.standardText}>
                {item.bookName}, written by {item.author}.
              </Text>
              <View style={globalStyles.buttonContainer}>
              </View>
            </View> : null
          )}
        />
        ) : (
          <Text>No books added yet! Go add some!</Text>
        )
      }

    </View>
  );
};

export default BookListScreen;


