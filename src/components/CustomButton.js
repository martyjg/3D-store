import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addProduct } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

class CustomButton extends Component {



    handleAdd(product) {
        this.props.addProduct(product);
    }

    render() {
        const { client, label } = this.props;
        const styles = {
            button: {
                backgroundColor: client.buttonColor,
                padding: client.buttonPadding + 'px',
                border: client.buttonBorder + 'px solid black'
            }
        }
        return (
            <button
                style={styles.button}
                onClick={() => {this.handleAdd(this.props.product)}} type='button'>
                    {label}
            </button>
        );
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);

CustomButton.propTypes = {
    product: PropTypes.object.isRequired,
    client: PropTypes.object,
    label: PropTypes.string
}
