import React, { Component } from 'react';
import AddButton from './AddButton';

export default class ProductItem extends Component {

    render() {
        return (
            <div
                style={{width: '33.33%', padding: '8px', borderBottom: '1px solid black', boxSizing: 'border-box'}}>
                <div style={{width: '50%', paddingTop: '50%', margin: '0 auto', border: '1px solid black'}} />
                <h2
                    style={{margin: '8px 0'}}
                    dangerouslySetInnerHTML={{__html: this.props.content.name}} />
                <h3
                    style={{margin: '8px 0'}}
                    dangerouslySetInnerHTML={{__html: this.props.content.price}} />
                <AddButton />
            </div>
        );
    }
}
