/**
 * Created by songzhongkun on 17/4/8.
 */
'use strict';

import {dispatchAction, registerActions} from '../utils/helper';

export const ADD_HOBBY = 'ADD_HOBBY';
export const FIND_HOBBY = 'FIND_HOBBY';

const acceptActions = [ADD_HOBBY, FIND_HOBBY];

const hobbies = action => {
  return {
    hobbies: action.response.hobbies,
  };
};

const callBacks = {
  ADD_HOBBY: hobbies,
  FIND_HOBBY: hobbies,
};

const initState = {
  isFetching: false,
  hobbies: [],
};

export default function hobbyReducer(state = initState, action) {
  return registerActions(state, action, acceptActions, callBacks);
}

export function addHobby(params) {
  return dispatchAction(ADD_HOBBY, 'addHobby', params);
}

export function findHobbies() {
  return dispatchAction(FIND_HOBBY, 'findHobbies');
}