import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTaskScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      completed: false,
    };

    //send the task to the reducer 
    dispatch(addTask(newTask));
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Save" onPress={handleAddTask} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default AddTaskScreen;
