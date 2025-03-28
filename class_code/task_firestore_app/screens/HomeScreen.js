import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, toggleCompletionStatus } from '../redux/actions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Subscribe to Firestore data on component mount
    const taskListener = dispatch(fetchTasks())
    
    // top listening to data when the component unmount
    return () => taskListener
  }, [dispatch]);

  const taskList = useSelector((state) => state.tasks.listOfTasks)

  const renderTaskItem = ({ item, dispatch, navigation }) => (
    <View style={styles.taskItem}>
      <View style={styles.taskInfoContainer}>
      <Text style={item.completed ? styles.taskCompleted : styles.taskText}>
        {item.name}
      </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => dispatch(toggleCompletionStatus(item.id))}
          disabled
        >
          <MaterialIcons 
            name={item.completed ? 'check-circle' : 'check'} 
            size={24} 
            color={item.disabled ? 'gray' : item.completed ? 'gray' : 'green'} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditTask', { taskId: item.id })}
        >
          <MaterialIcons 
            name="edit" 
            size={24} 
            color="blue" 
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          disabled
        >
          <MaterialIcons 
            name={'cancel'} 
            size={24} 
            color={'red'}  
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  const handleDelete = (taskId) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => dispatch(deleteTask(taskId)),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      {
      (taskList && (taskList.length > 0)) ? (
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderTaskItem({ item, dispatch, navigation })}
        />
        ) : (
          <Text>No tasks in the list yet</Text>
        )
      }
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.summaryButton} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.summaryButtonText}>Summary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskItem: {
    flexDirection:'row',
    alignItems: 'start',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  taskInfoContainer: {
    width: '75%', 
  },
  taskText: {
    fontSize: 20,
  },
  taskCompleted: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttonContainer: {
    width: '25%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1%',
    gap: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  summaryButton: {
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

