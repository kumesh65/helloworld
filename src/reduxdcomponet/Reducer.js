
import * as actions from "./ActionType"

let userid = 0;
function reducer(state=[], action)
{
    if(action.type ===actions.ADD_STUDENT)
    {
        return[
            ...state,
            {
             id:++userid,
             fname: action.payload.fname,
             lname: action.payload.lname
            }
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