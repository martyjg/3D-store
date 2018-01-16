import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

class Checkout extends Component {

    render() {

        const { client } = this.props;

        return (
            <article className='Checkout-container'>
                {client.checkoutBanner &&
                    <a href={client.checkoutBannerLink}>
                        <div dangerouslySetInnerHTML={{__html: client.checkoutBanner}} />
                    </a>
                }
                <h1>Checkout</h1>
            </article>
        );
    }

}

export default connect(mapStateToProps)(Checkout);
