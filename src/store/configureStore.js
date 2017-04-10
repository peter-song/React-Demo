/**
 * Created by songzhongkun on 17/4/8.
 */
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer/index";
import DevTools from "../component/DevTools/DevTools";

export default function configureStore() {

    const middleware = [thunkMiddleware];
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )
    );

    return store;
}