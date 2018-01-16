import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProductListing from './ProductListing';
import Checkout from './Checkout';
import SideNav from './SideNav';

const Shop = ({ match }) => (

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

)

export default Shop;
