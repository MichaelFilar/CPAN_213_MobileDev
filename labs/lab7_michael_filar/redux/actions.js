//actions.js
//actions represents JS object
// that indicates any parameters needed to perform the action

import { 
    CONVERT_TEMP,
    UPDATE_TEMP
} from './actionTypes';

//define actions 
//actions must return a JS object
//that consist 2 properties:
//type : indicates the actionType
//payload : indicates any parameters needed to perform the action


export const convertTemp = () => ({
    type: CONVERT_TEMP
})

export const updateTemp = (inTemp) => ({
    type: UPDATE_TEMP,
    payload: inTemp
})

