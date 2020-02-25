import React from 'react'
import { connect } from 'react-redux'
import { addItem } from './../../redux/action/cart'
import Button from './../button'
import './index.scss'

const index = ({ item, addItem }) => {
    const { id, imageUrl, name, price } = item
    return (
    <div key={id} className='collection-item'>
    {name}
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <Button onClick={() => addItem(item)} inverted>Add to cart</Button>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(index)
