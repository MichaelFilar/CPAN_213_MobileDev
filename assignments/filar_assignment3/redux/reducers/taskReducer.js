//TaskReducer.js
/*
* reducer is repsonsible for storing the states
* and updating the states based on the action
*/

import { act } from "react";
import {
    BOOK_ROOM,
    DELETE_BOOKING
} from "../actionTypes"

const initialState = {
    user: "",
    bookedRooms: [

    ],
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

    switch (action.type) {
        case BOOK_ROOM: {
            console.log(`Booking Room`);
            console.log(`Room : ${action.payload}`)

            return {
                ...state,
                bookedRooms: [...state.bookedRooms, action.payload]

            }
        }
        case DELETE_BOOKING: {
            console.log(`Deleting booked room`);
            console.log(`Room : ${action.payload}`)
            console.log(state.bookedRooms)
            return {
                ...state,
                bookedRooms: state.bookedRooms.filter(room => room.roomNum !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}