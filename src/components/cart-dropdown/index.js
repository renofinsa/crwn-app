import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from './../../redux/selector/cart'
import { toggleCartHidden } from './../../redux/action/cart'
import { withRouter } from 'react-router-dom'

import CartItem from './../cart-item'
import CustomButton from './../button'
import './index.scss'
import { createStructuredSelector } from 'reselect'

const index = ({cartItems, history, dispatch}) => (
<div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? 
      (
        cartItems.map(cartItem => 
        (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(index))
