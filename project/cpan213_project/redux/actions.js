//actions.js
//actions represents JS object
// that indicates any parameters needed to perform the action

import { 
    GET_JOKE,
    SAVE_JOKE,
    LOG_IN
} from './actionTypes';

//define actions 
//actions must return a JS object
//that consist 2 properties:
//type : indicates the actionType
//payload : indicates any parameters needed to perform the action


export const getJoke = (inJoke) => ({
    type: GET_JOKE,
    payload: inJoke,
})

export const saveJoke = () => ({
    type: SAVE_JOKE
})

export const logIn = (username) => ({
    type: LOG_IN,
    payload: username
})

