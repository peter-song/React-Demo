/**
 * Created by songzhongkun on 17/4/8.
 */
'use strict';

import hobbyReducer from './profile';

const AppReducer = (state = {}, action) => ({
  hobby: hobbyReducer(state.hobby, action),
});

export default AppReducer;
