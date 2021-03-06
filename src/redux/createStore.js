/**
 * Created by songzhongkun on 17/4/8.
 */
'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleWare from './middleware/clientMiddleWare';
// import createLogger from 'redux-logger';

import DevTools from '../component/DevTools/DevTools';

export default function configureStore(client, initialState) {

  const middleware = [
    thunkMiddleWare(client), // 自定义
    // createLogger //日志组件
  ];

  //使用自定义中间件时需要加上括号
  /*const store = createStore(
   rootReducer,
   compose(
   applyMiddleware(...middleware),
   DevTools.instrument()
   )
   );*/

  //创建store的另一种写法
  let finalCreateStore = compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || DevTools.instrument()
  )(createStore);
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}