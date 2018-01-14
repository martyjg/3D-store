import { ADD_PRODUCT } from '../constants/action-types';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};

export default combineReducers({
    router: routerReducer,
    products: rootReducer
});
