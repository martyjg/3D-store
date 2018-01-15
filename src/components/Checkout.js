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
            <article>
                {client.checkoutBanner &&
                    <div dangerouslySetInnerHTML={{__html: client.checkoutBanner}} />
                }
                <div>Checkout</div>
            </article>
        );
    }

}

export default connect(mapStateToProps)(Checkout);
