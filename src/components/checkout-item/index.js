import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromCart, addItem, removeItem } from './../../redux/action/cart'

import './index.scss'

const index = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity } = cartItem
    return (
    <div className='checkout-item'>
       <div className='image-container'>
            <img src={imageUrl} alt='item'/> 
       </div>
       <span className='name'>{name}</span>
       <span className='quantity'>
            <div className='arrow fa fa-chevron-left' onClick={() => removeItem(cartItem)}></div>
            <span className='value'>{quantity}</span>
            <div className='arrow fa fa-chevron-right' onClick={() => addItem(cartItem)}></div>
       </span>
       <span className='price'>{price}</span>
       <span className='remove-button fa fa-remove' onClick={() => clearItem(cartItem)}></span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)), 
    removeItem: item => dispatch(removeItem(item)) 
})

export default connect(null, mapDispatchToProps)(index)
