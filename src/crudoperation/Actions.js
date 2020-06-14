
//import {ADD_STUDENT, UPDATED_STUDENT, DELETE_STUDENT } from "./ActionType"
import * as actions from './ActionType'
import reducer from '../reduxdcomponet/Reducer';

export function crateFirstStore(initialData)
{
    return{
        type: actions.INITIA_STORE,
        payload: initialData
    };
}

export function addStudent(newArray)
{
    return{
        type:actions.ADD_STUDENT,
        payload: newArray
    };

}
export function updateStudent(id, fname)
{
    return{
        type: actions.UPDATE_STUDENT,
        payload:{
            id:id,
            fname : fname
        }
    };
}
export function deleteStudent(id)
{
    return {
        type: actions.DELETE_STUDENT,
        payload: {
            id:id
        }
    };
}