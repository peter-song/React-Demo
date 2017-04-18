import Express from 'express';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import configureStore from '../src/redux/createStore';
import Profile from '../src/component/profile/Header';

const app = new Express();
const port = 4000;


const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

function handleRender(req, res) {
    // fetchCounter(apiResult => {
    //     const params = qs.parse(req.query);
    //     const counter = parseInt(params.counter, 10) || apiResult || 0;

    const initialState = {hobby: {isFetching: false, hobbies: ['AA', 'BB']}};

    const store = configureStore(initialState);

    const html = renderToString(
        <Provider store={store}>
            <Router>
                <Route path="/" component={Profile}/>
            </Router>
        </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
    // });
}

app.use(handleRender);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
