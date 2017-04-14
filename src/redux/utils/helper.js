/**
 * Created by songzhongkun on 2017/4/14.
 */

import warning from 'warning';

const prefix = 'TEST';
const fail = 'FAIL';
const success = 'SUCCESS';
const separator = '_';

const createAction = (action, pre, post) => {
    if (pre) {
        action = pre + separator + action;
    }
    if (post) {
        action += separator + post;
    }
    return action;
};

const generateActionTypes = (action, isRemoteRequest) => {
    return isRemoteRequest ? [createAction(action, prefix), createAction(action, prefix, success), createAction(action, prefix, fail)] : action;
};

export function dispatchAction(action, apiPath, query, method) {
    method = method || 'post';
    let isRemoteRequest = typeof apiPath == 'string';
    const q = Object.is(method, 'get') ? {params: query} : {data: query};

    let actions = generateActionTypes(action, isRemoteRequest);
    console.log(actions);

    return {
        types: actions,
        // promise: isRemoteRequest ? client => client[method]('/' + apiPath, q) : null
        promise: isRemoteRequest ? client => client : null
    }
}

export function registerActions(state, action, acceptActions, callBacks, callFails) {
    for (let ac of acceptActions) {
        if (action.type == generateActionTypes(ac, false)) {
            warning(callBacks[ac] !== undefined, `you should implement call back function for action ${ac}`);
            return Object.assign({
                ...state,
                isFetching: false,
            }, callBacks[ac](action, state));
        } else {
            for (let gac of generateActionTypes(ac, true)) {
                if (action.type === gac) {
                    if (action.type.indexOf(fail) > 0) {
                        return Object.assign({
                            ...state,
                            isFetching: false,
                            error: action.error
                        }, callFails[ac](JSON.parse(action.error.response.text), action, state));
                    } else if (action.type.indexOf(success) > 0) {
                        warning(callBacks[ac] !== undefined, `you should implement call back function for action ${ac}`);
                        return Object.assign({
                            ...state,
                            isFetching: false,
                        }, callBacks[ac](action, state));
                    } else {
                        return {
                            ...state,
                            isFetching: true
                        };
                    }
                }
            }
        }
    }
    return state;
}