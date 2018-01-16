import React, { Component } from 'react';
import CustomButton from './CustomButton';

export default class ProductItem extends Component {

    render() {
        return (
            <div className='ProductItem'>
                <div />
                <h3 dangerouslySetInnerHTML={{__html: this.props.content.name}} />
                <h4 dangerouslySetInnerHTML={{__html: '£' + this.props.content.price.toFixed(2)}} />
                <CustomButton
                    label='Add'
                    product={this.props.content} />
            </div>
        );
    }
}
