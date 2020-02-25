import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from './../../redux/selector/cart'

import CartItem from './../cart-item'
import CustomButton from './../button'
import './index.scss'

const index = ({cartItems}) => (
<div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(index)
