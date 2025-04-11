import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

const EditTaskScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { taskId } = route.params;

  //get the existing task from the redux store
  const task = useSelector((state) => 
    state.tasks.listOfTasks.find((task) => task.id === taskId));

  const [taskName, setTaskName] = useState(task.name);

  const handleEditTask = () => {
    const updatedTask = { ...task, name: taskName };
    console.log(`updatedToTask : ${JSON.stringify(updatedTask)}`);

    dispatch(editTask(updatedTask));

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Update" onPress={handleEditTask} color="#2196F3" disabled/>
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

export default EditTaskScreen;
