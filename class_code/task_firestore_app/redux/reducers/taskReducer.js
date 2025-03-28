import { 
    ADD_TASK, 
    EDIT_TASK, 
    TOGGLE_COMPLETION_STATUS ,
    FETCH_TASKS,
    DELETE_TASK
} from "../actionTypes"

const initialState = {
    listOfTasks: []
}

export const taskReducer = (state = initialState, action) => {

    console.log(`taskReducer received action: ${action.type}
        \n payload : ${JSON.stringify(action.payload)}`);

    switch (action.type){
        case FETCH_TASKS: {
            return {
                ...state,
                listOfTasks: action.payload
            };
        }
        case ADD_TASK:{
            return state
        }
        case EDIT_TASK:{
            return state
        }
        case TOGGLE_COMPLETION_STATUS:{
            return state
        }
        case DELETE_TASK:{
            return state
        }
        default:{
            return state
        }
    }
}
