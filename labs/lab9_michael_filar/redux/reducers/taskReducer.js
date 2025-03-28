//TaskReducer.js
/*
* reducer is repsonsible for storing the states
* and updating the states based on the action
*/

import { 
    ADD_BOOK,
    FETCH_BOOKS
} from "../actionTypes"

const initialState = {
    bookList: [

    ]
}

// example
// initial state can contain multiple variables of different data types 
//with or without initial values

// const initalState = {
//     listOfTasks: [],
//     listOfStudents: [{id:123, name: 'alex'},{}],
//     numOfStudents: 0,
//     avgGrade: 0.0,
//     classClosed: true
// }

//reducer functions to perform actions
//reducer must receive two parameters
//1. state
//2. action to be performed on state
//reducer must return current or updated state

export const taskReducer = (state = initialState, action) => {

    console.log(`taskReducer received action: ${action.type}
        \n payload : ${JSON.stringify(action.payload)}`);

    switch (action.type){
        case FETCH_BOOKS: {
            return {
                ...state,
                bookList: action.payload
            };
        }
        case ADD_BOOK:{
            return state
        }
        default:{
            return state
        }
    }
}