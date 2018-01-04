/**
 * Created by songzhongkun on 2017/4/14.
 */
'use strict';

const clientMiddleWare = client => {

  return ({dispatch, getState}) => next => action => {

    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const {promise, types, ...rest} = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({...rest, type: REQUEST});

    const actionPromise = promise(client);

    actionPromise.then(
      result => {
        const response = result.response;
        if (result.status === 'OK') {
          next({...rest, response, type: SUCCESS});
        } else {
          next({...rest, response, type: FAILURE});
        }
      }
    ).catch(
      msg => console.log(msg)
    );

  };
};

export default clientMiddleWare;