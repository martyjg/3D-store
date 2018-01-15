import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    products: state.entities.products,
    client: state.client
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('checkout')
}, dispatch);

const SideCart = ({ changePage, products, client }) => (
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
                <button
                    style={{
                        backgroundColor: client.buttonColor,
                        padding: client.buttonPadding + 'px',
                        border: client.buttonBorder + 'px solid black'
                    }}
                    type='button'
                    onClick={() => changePage()}>Checkout</button>
            }
        </div>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);

SideCart.propTypes = {
    products: PropTypes.array
};
