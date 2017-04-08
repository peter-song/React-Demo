/**
 * Created by songzhongkun on 17/4/8.
 */

import {ADD_HOBBY, GET_HOBBY} from '../../action/profile/index';

export function hobbies(state = ['听音乐', '打篮球'], action) {
    switch (action.type) {
        case ADD_HOBBY:
            return [...state, action.data];
        case GET_HOBBY:
        default:
            return state;
    }
}