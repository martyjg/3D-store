import React from 'react';
import CustomButton from './CustomButton';

const ProductItem = ({ content }) => (
    <div className='ProductItem'>
        <div />
        <h3 dangerouslySetInnerHTML={{__html: content.name}} />
        <h4 dangerouslySetInnerHTML={{__html: '£' + content.price.toFixed(2)}} />
        <CustomButton
            label='Add'
            product={content} />
    </div>
);

export default ProductItem;
