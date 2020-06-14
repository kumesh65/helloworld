
import * as actions from "./ActionType"

function reducer(state=[], action)
{
    if(action.type === actions.INITIA_STORE){
        return [
            ...state,
            action.payload
        ];
    }
    else if(action.type ===actions.ADD_STUDENT)
    {
        return[
            ...state,
            action.payload
        ]
    }
    else if(action.type === actions.UPDATE_STUDENT)
    {
        return state.map(student =>student.id !==action.payload.id ? student :{...student, fname:action.payload.fname});

    }
    else if(action.type === actions.DELETE_STUDENT)
    {
        return state.filter(student => student.id!==action.payload.id);
    }
    else {
        return state;
    }
}

export default reducer;