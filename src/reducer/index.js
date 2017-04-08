/**
 * Created by songzhongkun on 17/4/8.
 */

import {combineReducers} from 'redux';
import undoable, {includeAction} from 'redux-undo';
import {hobbies} from './profile/index';
import {ADD_HOBBY, UNDO_HOBBY, REDO_HOBBY} from '../action/profile/index';

const rootReducer = combineReducers({
    hobbies: undoable(hobbies, {
        filter: includeAction([ADD_HOBBY]),
        limit: 10,
        debug: true,
        undoType: UNDO_HOBBY,
        redoType: REDO_HOBBY
    })
});

export default rootReducer;