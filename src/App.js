import React, { Component } from 'react';
import ProductListing from './components/ProductListing';
import Settings from './components/Settings';
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
                <article className='App-container'>
                    <aside style={{flex: '0 0 300px', borderRight: '1px solid black'}}>
                        <nav style={{position: 'sticky', top: '0'}}>
                            <ul>
                                <li>Products</li>
                                <li>Settings</li>
                            </ul>
                        </nav>
                    </aside>
                    <ProductListing />
                    <div style={{flex: '0 0 150px', borderLeft: '1px solid black'}}>
                        <div style={{position: 'sticky', top: '0'}}>
                            Checkout
                        </div>
                    </div>
                </article>
                <footer style={{height: '200px', backgroundColor: 'aquamarine'}}>
                    <div className='App-footer'>
                        Footer
                    </div>
                </footer>
            </div>
        );
    }
}
