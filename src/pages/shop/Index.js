import React, { Component } from 'react'
import SHOP_DATA from './data.js'
import CollectionPreview from './../../components/collectionPreview'

class index extends Component {
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        // console.log(collections)
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default index