//actions.js
//actions represents JS object
// that indicates any parameters needed to perform the action

import { 
    ADD_PARKING,
    FETCH_PARKING,
    EDIT_PARKING,
    DELETE_PARKING
} from './actionTypes';


import { db } from '../config/firebaseConfig';
import { 
    collection, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    onSnapshot } from 'firebase/firestore';

const parkingCollection = "parking"
const collectionRef = collection(db, parkingCollection)


//define actions 
//actions must return a JS object
//that consist 2 properties:
//type : indicates the actionType
//payload : indicates any parameters needed to perform the action


export const addParking = (parking) => async dispatch => {
    try {
        console.log(`Trying to save parking to database : ${JSON.stringify(parking)}`);
    
        //get reference of the document to be added
        const docRef = await addDoc(collectionRef, parking)

        console.log(`document saved successfully : ${docRef.id}`);
        
        //dispatch the action to reducer so that state can be updated
        dispatch({
            type: ADD_PARKING,
            payload: {
                id: docRef.id, //get the document id to be used for update and delete
                ...parking
            }
        })
    } catch (error) {
        console.error("Error adding parking: ", error);
    }
}

export const fetchParking = () => async dispatch => {
    try {
        console.log(`Trying to fetch parking list to database.`);

        //listen to data

        const dataListener = onSnapshot(collectionRef, snapshot => {
            //data is received
            //perform necessary operations

            const parkingList = snapshot.docs.map( (doc) => (
                {
                    id: doc.id,
                    ...doc.data() //data() to acces all the fields from document
                }
            ))
            console.log(`dispatching`);
            //dispatch action to reducer
            dispatch({
                type: FETCH_PARKING,
                payload: parkingList
            })
            console.log(`post dispatch`);
        })

        return dataListener

    } catch (error) {
        console.error("Error fetching parking list: ", error);
    }
};

export const editParking = (updatedParking) => async dispatch => {
    try {
                console.log(`Trying to update parking to updatedParking = ${JSON.stringify(updatedParking)}`);
        
                // get the document reference to edit
                const docRef = doc(collectionRef, updatedParking.id)
        
                //extract the fields to modify except the id
                const {id: _ , ...filteredParking} = updatedParking
        
                //update the doc in database
                await updateDoc(docRef, filteredParking)
        
                dispatch({
                    type: EDIT_PARKING,
                    payload: {
                        id: updatedParking.id,
                        updatedParking
                    }
                })
        
    } catch (error) {
        console.error("Error updating parking: ", error);
    }
};

export const deleteParking = (parkingId) => async dispatch =>  {
    try {
        console.log(`Trying to delete for parking ID : ${parkingId}`);

        const docRef = doc(collectionRef, parkingId)
        await deleteDoc(docRef)
        dispatch({
            type: DELETE_PARKING,
            payload: parkingId
        })

    } catch (error) {
        console.error("Error deleting the parking: ", error);
    }
};
