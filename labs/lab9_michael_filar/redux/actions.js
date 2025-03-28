//actions.js
//actions represents JS object
// that indicates any parameters needed to perform the action

import { 
    ADD_BOOK,
    FETCH_BOOKS
} from './actionTypes';


import { db } from '../config/firebaseConfig';
import { 
    collection, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    onSnapshot } from 'firebase/firestore';

const bookCollection = "books"
const collectionRef = collection(db, bookCollection)


//define actions 
//actions must return a JS object
//that consist 2 properties:
//type : indicates the actionType
//payload : indicates any parameters needed to perform the action


export const addBook = (book) => async dispatch => {
    try {
        console.log(`Trying to save book to database : ${JSON.stringify(book)}`);
    
        //get reference of the document to be added
        const docRef = await addDoc(collectionRef, book)

        console.log(`document saved successfully : ${docRef.id}`);
        
        //dispatch the action to reducer so that state can be updated
        dispatch({
            type: ADD_BOOK,
            payload: {
                id: docRef.id, //get the document id to be used for update and delete
                ...book
            }
        })
    } catch (error) {
        console.error("Error adding book: ", error);
    }
}

export const fetchBooks = () => async dispatch => {
    try {
        console.log(`Trying to fetch books to database.`);

        //listen to data

        const dataListener = onSnapshot(collectionRef, snapshot => {
            //data is received
            //perform necessary operations

            const bookList = snapshot.docs.map( (doc) => (
                {
                    id: doc.id,
                    ...doc.data() //data() to acces all the fields from document
                }
            ))

            //dispatch action to reducer
            dispatch({
                type: FETCH_BOOKS,
                payload: bookList
            })
        })

        return dataListener

    } catch (error) {
        console.error("Error fetching books: ", error);
    }
};

