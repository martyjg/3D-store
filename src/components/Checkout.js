import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

const Checkout = ({ client }) => (

    <article className='Checkout-container'>
        {client.checkoutBanner &&
            <a href={client.checkoutBannerLink}>
                <div dangerouslySetInnerHTML={{__html: client.checkoutBanner}} />
            </a>
        }
        <h1>Checkout</h1>
    </article>

);

export default connect(mapStateToProps)(Checkout);
