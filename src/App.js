import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './components/Shop';
import Settings from './components/Settings';
// import logo from './logo.svg';
import './App.css';

import { loadClient } from './actions';

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

const mapStateToActions = {
    loadClient
};

class App extends Component {

    componentWillMount() {
        this.props.loadClient(this.props.match.params.clientId)
    }

    render () {
        const { match, client } = this.props;
        const styles = {
            font: {
                fontFamily: client.font
            },
            header: {
                backgroundColor: client.headerColor
            },
            footer: {
                backgroundColor: client.footerColor
            }
        };
        if (client.isLoading) {
            // TODO: return a spinner mate.
            return null;
        }
        return (
            <div className='App' style={styles.font}>
                <header className='App-header' style={styles.header}>
                    <img src={client.logo} className='App-logo' alt='logo' />
                    {client.displayName &&
                        <h1 className='App-title'>{client.displayName}</h1>
                    }
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
                <footer style={styles.footer}>
                    <div className='App-footer'>
                        {client.footerLeftColumn &&
                            <div dangerouslySetInnerHTML={{__html: client.footerLeftColumn}} />
                        }
                        {client.footerRightColumn &&
                            <div dangerouslySetInnerHTML={{__html: client.footerRightColumn}} />
                        }
                    </div>
                </footer>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapStateToActions)(App);
