import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return { products: state.products };
};

const ConnectedSideCart = ({ products }) => (
    <div style={{flex: '0 0 150px', borderLeft: '1px solid black'}}>
        <div style={{position: 'sticky', top: '0'}}>
            <h4>Checkout</h4>
            <ul>
                {products.map((product, i) => (
                    <li key={i}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const SideCart = connect(mapStateToProps)(ConnectedSideCart);

export default SideCart;

ConnectedSideCart.propTypes = {
    products: PropTypes.array
};
