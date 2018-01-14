
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './products';
import client from './client';
// import clients from './clients';

const entities = combineReducers({
    // clients,
    products
})

export default combineReducers({
    router: routerReducer,
    entities,
    client
});
