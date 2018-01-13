import React, { Component } from 'react';
import ProductItem from './ProductItem';

const products = [
    {
        name: 'Screw-01',
        price: '£0.50',
        materials: ['acrylic']
    },
    {
        name: 'Screw-02',
        price: '£0.50',
        materials: ['acrylic']
    },
    {
        name: 'Washer-01',
        price: '£0.40',
        materials: ['polyurethane']
    },
    {
        name: 'Washer-02',
        price: '£0.40',
        materials: ['polyurethane']
    },
    {
        name: 'Nut-01',
        price: '£0.40',
        materials: ['polyurethane']
    },
    {
        name: 'Nut-02',
        price: '£0.40',
        materials: ['polyurethane']
    }
]

export default class ProductListing extends Component {
    render() {

        const items = products.map((item, i) => {
            return (
                <ProductItem key={i} content={item} />
            )
        })

        return (
            <div style={{display: 'flex', width: '100%', flexWrap: 'wrap', padding: '0 4px'}}>
                {items}
                {items}
            </div>
        );
    }
}
