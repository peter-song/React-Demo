/**
 * Created by songzhongkun on 17/4/8.
 */

import {dispatchAction, registerActions} from '../utils/helper';

export const ADD_HOBBY = 'ADD_HOBBY';
export const GET_HOBBY = 'GET_HOBBY';

const acceptActions = [ADD_HOBBY, GET_HOBBY];

export function hobbies(state = ['听音乐', '打篮球'], action) {
    switch (action.type) {
        case ADD_HOBBY:
            return [...state, action.data];
        case GET_HOBBY:
        default:
            return state;
    }
}

const callBacks = {
    HOBBY: action => {
        return {
            hobbies: action.request.hobbies
        }
    }
};

const initState = {};

export default function hobbyReducer(state = initState, action) {
    return registerActions(state, action, acceptActions, callBacks);
}

export function addHobby(params) {
    return dispatchAction(ADD_HOBBY, 'add_hobby', params);
}