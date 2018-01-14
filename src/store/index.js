import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export const history = createHistory();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, routerMiddleware(history), createLogger())
);

export default store;
