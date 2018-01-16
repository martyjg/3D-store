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

const SideCart = ({ changePage, products, client }) => {
    const total = products.reduce(
        (accumulation, currentValue) => accumulation + currentValue.price,
        0
    );
    return (
        <div className='SideCart-container'>
            <div>
                <h4>Cart</h4>
                <ul>
                    {products.map((product, i) => (
                        <li key={i}>
                            {product.name}
                        </li>
                    ))}
                </ul>
                {products.length > 0 &&
                    <div>
                        <h4>Total: £{total.toFixed(2)}</h4>
                        <button
                            style={{
                                backgroundColor: client.buttonColor,
                                padding: client.buttonPadding + 'px',
                                border: client.buttonBorder + 'px solid black'
                            }}
                            type='button'
                            onClick={() => changePage()}>Checkout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SideCart);

SideCart.propTypes = {
    products: PropTypes.array
};
