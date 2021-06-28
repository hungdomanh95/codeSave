import {GET_LIST_TODO,ADD_TODO,CHECK} from './actionType'


export function getListTodo(){
    return { 
        type: GET_LIST_TODO 
    };
}
export function addTodo(data){
    return { 
        type: ADD_TODO,
        data:data
    };
}
export function checkTodo(data){
    return { 
        type: CHECK,
        data:data
    };
}