/**
 * Created by songzhongkun on 2017/4/14.
 */

export default function createThunkMiddleware(extraArgument) {
    console.log('exec createThunkMiddleware');
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        return next(action);
    };
}