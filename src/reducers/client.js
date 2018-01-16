import * as actionTypes from '../constants/action-types';

const initialState = {
    id: null,
    displayName: '',
    // buttonStyle: 'default',
    color: '#ffffff',
    font: 'Helvetica',
    logo: '',
    // logo: 'https://www.3yourmind.com/hs-fs/hubfs/3YOURMIND_Logo_266_51.png?t=1515961216802&width=266&name=3YOURMIND_Logo_266_51.png',
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
