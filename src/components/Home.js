import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductListing from './ProductListing';
import Settings from './Settings';
import SideCart from './SideCart';

export default class Home extends Component {

    render () {
        return (
            <article className='App-container'>
                <aside style={{flex: '0 0 300px', borderRight: '1px solid black'}}>
                    <nav style={{position: 'sticky', top: '0'}}>
                        <ul>
                            <li>
                                <h4>
                                    <Link to='/products'>Products</Link>
                                </h4>
                            </li>
                            <li>
                                <h4>
                                    <Link to='/'>Settings</Link>
                                </h4>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <Route path='/products' component={ProductListing} />
                <Route path='/' component={Settings} />
                <SideCart />
            </article>
        );
    }
}
