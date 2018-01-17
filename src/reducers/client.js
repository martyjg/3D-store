import * as actionTypes from '../constants/action-types';

const initialState = {
    id: null,
    displayName: '',
    color: '#ffffff',
    font: 'Helvetica',
    logo: '',
    buttonBorder: '1',
    buttonColor: '#ffffff',
    buttonPadding: '5',
    isLoading: true,
    headerColor: '',
    footerColor: '',
    blogLink: '',
    checkoutBannerLink: '',
    checkoutBanner: '',
    footerLeftColumn: '',
    footerRightColumn: ''
};

const client = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLIENT_LOADED:
            return {
                ...state,
                ...action.payload,
                id: action.clientId,
                isLoading: false
            };
        default:
            return state;
    }
};

export default client;
