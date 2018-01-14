import * as actionTypes from '../constants/action-types';

import getFirebaseInstance from '../firebaseApp';

const firebaseApp = getFirebaseInstance();

export const addProduct = product => (
    {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
);

export const loadClient = (clientId) => (dispatch, getState) => {
    firebaseApp.database()
        .ref('clients/' + clientId)
        .on('value', (snapshot) => {
            dispatch({
                type: actionTypes.CLIENT_LOADED,
                clientId: clientId,
                payload: snapshot.val()
            });
        });
}

export const updateClientSettings = (clientId, settingsData) => (distpach, getState) => {
    firebaseApp.database()
        .ref('clients/' + clientId)
        .update(settingsData)
}


// export const loadClients = () => (dispatch, getState) => {
//     firebaseApp.database()
//         .ref('clients')
//         .on('value', (snapshot) => {
//             dispatch({
//                 type: actionTypes.CLIENTS_LOADED,
//                 payload: snapshot.val()
//             });
//         });
// }
