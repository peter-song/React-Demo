/**
 * Created by songzhongkun on 17/4/8.
 */

import hobbyReducer from './profile';

export default function AppReducer(state = {}, action) {
    return {
        hobby: hobbyReducer(state.hobby, action)
    }
}
