/* eslint-disable no-underscore-dangle */
import {  createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

let preloadedState = {};
if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
    preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}
const composeEnhancers = (typeof window !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const middlewares = [thunk];

export const storeWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);

export const store = (storeWithMiddleware(reducers,preloadedState));

