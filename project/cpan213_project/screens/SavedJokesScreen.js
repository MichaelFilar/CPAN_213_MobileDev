import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompletionStatus } from '../redux/actions';
import globalStyles from '../shared/GlobalStyles';
/*
useSelector - hook to access the state from redux store
useDispatch - hook to dispatch actions to the store
*/

const SavedJokesScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  //use the state listOfTasks from taskReducer using useSelector
  const jokeList = useSelector((state) => state.tasksRoot.savedJokes)
  //example
  // const userList = useSelector((state) => state.userReducer.numOfUsers)

  return (
    <View style={globalStyles.container}>
      {
      (jokeList && (jokeList.length > 0)) ? (
        <FlatList
          data={jokeList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.joke}
              </Text>
            </View>
          )}
        />
        ) : (
          <Text>No saved jokes yet.</Text>
        )
      }
    </View>
  );
};

export default SavedJokesScreen;

