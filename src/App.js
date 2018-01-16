import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './components/Shop';
import Settings from './components/Settings';
import spinner from './spinner.svg';
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
        if (client.isLoading) {
            return (
                <div className='Spinner'>
                    <img src={spinner} alt='spinner' />
                </div>
            );
        }
        const styles = {
            font: {
                fontFamily: client.font
            },
            header: {
                backgroundColor: client.headerColor,
                // borderBottom: client.headerColor ? '' : '1px solid black'
            },
            footer: {
                backgroundColor: client.footerColor
            }
        };
        let logo;
        if (client.logo) {
            logo = <img src={client.logo} className='App-logo' alt='logo' />;
        } else {
            logo = <h1>3D Store</h1>;
        }
        return (
            <div className='App' style={styles.font}>
                <header className='App-header' style={styles.header}>
                    {logo}
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
                        <div dangerouslySetInnerHTML={{__html: client.footerLeftColumn}} />
                        <div style={{float: 'right'}} dangerouslySetInnerHTML={{__html: client.footerRightColumn}} />
                    </div>
                </footer>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapStateToActions)(App);
