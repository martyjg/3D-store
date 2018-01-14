import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <Route exact path='/' component={Home} />
                <Route path='/checkout' component={Checkout} />
                <footer style={{height: '200px', backgroundColor: 'aquamarine'}}>
                    <div className='App-footer'>
                        Footer
                    </div>
                </footer>
            </div>
        );
    }
}
