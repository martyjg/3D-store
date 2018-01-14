import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ products: state.entities.products });

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('checkout')
}, dispatch);

const ConnectedSideCart = ({ changePage, products }) => (
    <div style={{flex: '0 0 150px', borderLeft: '1px solid black'}}>
        <div style={{position: 'sticky', top: '0'}}>
            <h4>Cart</h4>
            <ul>
                {products.map((product, i) => (
                    <li key={i}>
                        {product.name}
                    </li>
                ))}
            </ul>
            {products.length > 0 &&
                <button type='button' onClick={() => changePage()}>Checkout</button>
            }
        </div>
    </div>
);

const SideCart = connect(mapStateToProps, mapDispatchToProps)(ConnectedSideCart);

export default SideCart;

ConnectedSideCart.propTypes = {
    products: PropTypes.array
};
