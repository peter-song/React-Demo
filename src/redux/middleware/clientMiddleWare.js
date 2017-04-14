/**
 * Created by songzhongkun on 2017/4/14.
 */
export default function clientMiddleWare() {
    return ({dispatch, getState}) => next => action => {
        console.log(action);

        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const {promise, types, ...rest} = action;

        if (!promise) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;

        next({...rest, type: REQUEST});

        const actionPromise = promise(request());

        actionPromise.then(
            (msg) => console.log(msg)
        ).catch(
            (msg) => console.log(msg)
        )
    }
}

function request() {
    
    return new Promise((resolve, reject) => {
        if (1 != 1) {
            resolve('success')
        } else {
            reject('failure');
        }
    })
}