import React, { Component } from 'react';

import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Shop from './components/Shop';
import Settings from './components/Settings';
import logo from './logo.svg';
import './App.css';

import { loadClient } from './actions';

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
})

const mapStateToActions = {
    loadClient
}

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadClient(this.props.match.params.clientId)
    }

    render () {
        const {match, client} = this.props;
        if (client.isLoading) {
            // TODO: return a spinner mate.
            return null;
        }
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={client.logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>{client.displayName}</h1>
                </header>
                <Switch>
                    <Route
                        path={`${match.url}/settings`}
                        component={Settings}
                    />
                    <Route
                        path={`${match.url}/`}
                        component={Shop}
                    />
                    <Route
                        exact
                        path={`${match.url}`}
                        render={() => (
                            <Redirect to={`${match.url}/`}/>
                        )}
                    />
                </Switch>
                <footer style={{height: '200px', backgroundColor: 'aquamarine'}}>
                    <div className='App-footer'>
                        Footer
                    </div>
                </footer>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapStateToActions)(App);
