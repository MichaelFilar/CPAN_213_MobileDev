import { 
    ADD_TASK, 
    EDIT_TASK, 
    TOGGLE_COMPLETION_STATUS,
    DELETE_TASK,
    FETCH_TASKS
} from './actionTypes';

import { db } from '../config/firebaseConfig';
import { 
    collection, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    onSnapshot } from 'firebase/firestore';

const taskCollection = "tasks"
const collectionRef = collection(db, taskCollection)


//all the database operations must be performed async
export const addTask = (task) => async dispatch => {
    try {
        console.log(`Trying to save task to database : ${JSON.stringify(task)}`);
    
        //get reference of the document to be added
        const docRef = await addDoc(collectionRef, task)

        console.log(`document saved successfully : ${docRef.id}`);
        // console.log(`document: ${JSON.stringify(docRef.data())}`);
        
        //dispatch the action to reducer so that state can be updated
        dispatch({
            type: ADD_TASK,
            payload: {
                id: docRef.id, //get the document id to be used for update and delete
                ...task
            }
        })
    } catch (error) {
        console.error("Error adding task: ", error);
    }
};

// without redux
// export const fetchTasks = async() => {

export const fetchTasks = () => async dispatch => {
    try {
        console.log(`Trying to fetch tasks to database.`);

        //listen to data

        const dataListener = onSnapshot(collectionRef, snapshot => {
            //data is received
            //perform necessary operations

            const taskList = snapshot.docs.map( (doc) => (
                {
                    id: doc.id,
                    ...doc.data() //data() to acces all the fields from document
                }
            ))

            //dispatch action to reducer
            dispatch({
                type: FETCH_TASKS,
                payload: taskList
            })
        })

        return dataListener

    } catch (error) {
        console.error("Error fetching tasks: ", error);
    }
};

export const editTask = (updatedTask) => {
    try {
        console.log(`Trying to update task to updatedTask = ${JSON.stringify(updatedTask)}`);
    } catch (error) {
        console.error("Error updating task: ", error);
    }
};

export const toggleCompletionStatus = (taskId) => {
    try {
        console.log(`Trying to toggleCompletionStatus for task ID : ${taskId}`);
    } catch (error) {
        console.error("Error toggling completion status: ", error);
    }
};

export const deleteTask = (taskId) => {
    try {
        console.log(`Trying to delete for task ID : ${taskId}`);
    } catch (error) {
        console.error("Error deleting the task: ", error);
    }
};



