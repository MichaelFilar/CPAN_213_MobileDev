//TaskReducer.js
/*
* reducer is repsonsible for storing the states
* and updating the states based on the action
*/

import { act } from "react";
import {
    GET_JOKE,
    SAVE_JOKE,
    LOG_IN
} from "../actionTypes"

const initialState = {
    user: "",
    loggedIn: false,
    savedJokes: [
        {
            id: Date.now(),
            generatedAt: 0,
            joke: 'Test Joke'
        }
    ],
    currentJoke: "",
    counter: 0
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
        case LOG_IN: {
            console.log(`Logging In`);
            console.log(`User : ${action.payload}`)


            return {
                ...state,
                user: action.payload,
                loggedIn: true,

            }
        }
        case GET_JOKE: {
            console.log(`Getting joke`);
            console.log(`Joke : ${action.payload}`)
            console.log(`Counter : ${state.counter+1}`)

            return {
                ...state,
                currentJoke: action.payload,
                counter: state.counter + 1

            }
        }
        case SAVE_JOKE: {
            console.log(`Saving current joke`);
            console.log(`Logged : ${state.currentJoke}`)
            return {
                ...state,
                savedJokes: [...state.savedJokes,
                {
                    id: Date.now(),
                    generatedAt: state.counter,
                    joke: state.currentJoke
                }]
            }
        }
        default: {
            return state
        }
    }
}