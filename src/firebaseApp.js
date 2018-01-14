import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBlDxm1xnp7lCPwYFhcrF6JzTXFqf-lc6Y",
    authDomain: "yourmind-15ffe.firebaseapp.com",
    databaseURL: "https://yourmind-15ffe.firebaseio.com",
    projectId: "yourmind-15ffe",
    storageBucket: "yourmind-15ffe.appspot.com",
    messagingSenderId: "192684725251"
};

let firebaseApp = null;

const getFirebaseInstance = () => {
    if (!firebaseApp) {
        firebaseApp = firebase.initializeApp(config);
    }

    return firebaseApp;
};

export default getFirebaseInstance
