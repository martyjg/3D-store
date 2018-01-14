// import * as actionTypes from '../constants/action-types';
//
// import { combineReducers } from 'redux';
//
// const byId = (state = {}, action) => {
//     switch (action.type) {
//         case actionTypes.CLIENT_LOADED:
//             return {
//                 ...state,
//                 [action.payload.clientId] : action.payload
//             }
//         case actionTypes.CLIENTS_LOADED:
//             return {
//                 ...state,
//                 ...action.payload
//             }
//         default:
//             return state;
//     }
// }
//
// const allIds = (state = [], action) => {
//     switch (action.type) {
//         case actionTypes.CLIENT_LOADED:
//             return [
//                 ...state,
//                 action.payload.clientId
//             ]
//         case actionTypes.CLIENTS_LOADED:
//             return [
//                 ...state,
//                 ...Object.keys(action.payload)
//             ]
//         default:
//             return state;
//     }
// }
//
// export default combineReducers({byId, allIds});
