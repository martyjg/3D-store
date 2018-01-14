import * as actionTypes from '../constants/action-types';

const initialState = []

const products = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

export default products;
