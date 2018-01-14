import React, { Component } from 'react';
import ProductListing from './components/ProductListing';
import Settings from './components/Settings';
import SideCart from './components/SideCart';
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
                                <li>
                                    <h4>Products</h4>
                                </li>
                                <li>
                                    <h4>Settings</h4>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <ProductListing />
                    <SideCart />
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
