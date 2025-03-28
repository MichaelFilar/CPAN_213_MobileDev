//index.js
//root reducer 
//root reducer is responsible for combining all the reducers

import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';

export const rootReducer = combineReducers({tasksRoot: taskReducer})

// export const rootReducer = combineReducers({tasksReducer: taskReducer})

//example to combine multiple reducers
// export const rootReducer = combineReducers(
//     {
//         tasksReducer: taskReducer,
//         userReducer: userReducer,
//         employeeReducer: employeeReducer
//     }
// )