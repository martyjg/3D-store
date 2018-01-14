import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addProduct } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

class ConnectedAddButton extends Component {

    handleAdd(product) {
        console.log(product);
        this.props.addProduct(product);
    }

    render() {
        return (
            <button onClick={() => {this.handleAdd(this.props.product)}} type='button'>Add</button>
        );
    }

};

const AddButton = connect(null, mapDispatchToProps)(ConnectedAddButton);

export default AddButton;

ConnectedAddButton.propTypes = {
    product: PropTypes.object.isRequired
}
