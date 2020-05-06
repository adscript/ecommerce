import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class Shop extends Component {
    constructor () {
        super()
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionsProps }) => (
                        <CollectionPreview key={id} {...otherCollectionsProps}/>
                    ))
                }
            </div>
        )
    }
}