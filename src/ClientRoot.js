import React, { Component } from 'react';

// import { Route, Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import App from './App';
// import Admin from './components/Admin';

export default class ClientRoot extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    //
    // componentDidMount() {
    //     firebaseApp = firebase.initializeApp(firebaseConfig);
    // }

    render() {
        return <Route path="/:clientId" component={App} />;
        // return (
        //     {/*
        //     <Switch>
        //
        //         <Route path="/admin" component={Admin} />
        //         */}
        //         <Route path="/:clientId" component={MainApp} />
        //         {/*
        //     </Switch>
        //     */}
        // );
    }
};
