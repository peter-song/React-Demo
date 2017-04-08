/**
 * Created by songzhongkun on 17/4/8.
 */
export const ADD_HOBBY = 'ADD_HOBBY';
export const GET_HOBBY = 'GET_HOBBY';
export const UNDO_HOBBY = 'UNDO_HOBBY';
export const REDO_HOBBY = 'REDO_HOBBY';

export function addHobby(hobby) {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: ADD_HOBBY, data: hobby});
        }, 1000)
    }
}

export function getHobbies() {
    return {
        type: GET_HOBBY
    }
}

export function undo() {
    return {
        type: UNDO_HOBBY
    }
}

export function redo() {
    return {
        type: REDO_HOBBY
    }
}