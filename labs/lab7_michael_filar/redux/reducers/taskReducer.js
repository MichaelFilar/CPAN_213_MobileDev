//TaskReducer.js
/*
* reducer is repsonsible for storing the states
* and updating the states based on the action
*/

import { 
    CONVERT_TEMP,
    UPDATE_TEMP
} from "../actionTypes"

const initialState = {
    inTemp: 0.0,
    outTemp: 0.0
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
        case CONVERT_TEMP:{
            console.log(`Converting temperatore from celsius to fahrenheit`);
                console.log(`outTemp : ${state.inTemp*1.8+32}`)
                return {
                        state,  
                        outTemp: (state.inTemp*1.8+32)
                    
                }
        }
        case UPDATE_TEMP:{
            console.log(`Updating stored temperature
                inTemp : ${action.payload}`)
                return {
                    state,
                    inTemp: action.payload
                }
        }
        default:{
            return state
        }
    }
}