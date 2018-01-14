import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ProductListing from './ProductListing';
import Settings from './Settings';
import Checkout from './Checkout';
import SideCart from './SideCart';
import SideNav from './SideNav';

export default class Shop extends Component {

    render () {
        const { match } = this.props
        return (
            <article className='App-container'>
                <SideNav />
                <Route
                    exact
                    path={`${match.url}/`}
                    render={() => (
                        <Redirect to={`${match.url}/products`}/>
                    )}
                />
                <Route
                    path={`${match.url}/products`}
                    component={ProductListing}
                />
                <Route
                    path={`${match.url}/checkout`}
                    component={Checkout}
                />
            </article>
        );
    }
}
