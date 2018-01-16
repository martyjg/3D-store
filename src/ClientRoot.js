import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './App';
// import Admin from './components/Admin';

export default class ClientRoot extends Component {
    render() {
        return <Route path="/:clientId" component={App} />;
    }
}
