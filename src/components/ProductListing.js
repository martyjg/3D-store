import React, { Component } from 'react';
import ProductItem from './ProductItem';
import SideCart from './SideCart';
// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     return { products: state.products };
// }
//
// const ConnectedList = ({ products }) => (
//     <div style={{display: 'flex', width: '100%', flexWrap: 'wrap', padding: '0 4px'}}>
//         {products.map((product, i) => (
//             <ProductItem key={i} content={product} />
//         ))}
//     </div>
// )
//
// const ProductListing = connect(mapStateToProps)(ConnectedList);
//
// export default ProductListing;

const products = [
    {
        name: 'Screw-01',
        price: 0.50,
        materials: ['acrylic'],
        id: 1
    },
    {
        name: 'Screw-02',
        price: 0.50,
        materials: ['acrylic'],
        id: 2
    },
    {
        name: 'Washer-01',
        price: 0.40,
        materials: ['amber resin'],
        id: 3
    },
    {
        name: 'Washer-02',
        price: 0.40,
        materials: ['polyurethane'],
        id: 4
    },
    {
        name: 'Nut-01',
        price: 1.70,
        materials: ['chocolate'],
        id: 5
    },
    {
        name: 'Nut-02',
        price: 1.80,
        materials: ['polyurethane'],
        id: 6
    }
];

export default class ProductListing extends Component {
    render() {

        const items = products.map((item, i) => {
            return (
                <ProductItem key={i} content={item} />
            )
        })

        return (
            <div className='ProductListing-container'>
                <div className='ProductListing'>
                    {items}
                    {items}
                    {items}
                </div>
                <SideCart />
            </div>
        );
    }
}
