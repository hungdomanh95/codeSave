import {ADD_POPUP,REMOVE_POPUP}  from './actionType'
export const screenActions = {
    addPopup,
    removePopup,
};

function addPopup(screen){
    // console.log('screen: ', screen);
    return { type: ADD_POPUP, screen };
}

function removePopup(screen){
    return { type: REMOVE_POPUP, screen };
}

