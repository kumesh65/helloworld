
//import {ADD_STUDENT, UPDATED_STUDENT, DELETE_STUDENT } from "./ActionType"
import * as actions from './ActionType'

export function addStudent(fname, lname)
{
    return{
        type:actions.ADD_STUDENT,
        payload: {
            fname: fname,
            lname: lname
        }
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