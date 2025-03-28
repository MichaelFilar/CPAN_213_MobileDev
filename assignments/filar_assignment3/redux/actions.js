//actions.js
//actions represents JS object
// that indicates any parameters needed to perform the action

import { 
    BOOK_ROOM,
    DELETE_BOOKING
} from './actionTypes';

//define actions 
//actions must return a JS object
//that consist 2 properties:
//type : indicates the actionType
//payload : indicates any parameters needed to perform the action


export const bookRoom = (room) => ({
    type: BOOK_ROOM,
    payload: room
})

export const deleteBooking = (roomNum) => ({
    type: DELETE_BOOKING,
    payload: roomNum
})

