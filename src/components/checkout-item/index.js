import React from 'react'
import './index.scss'

const index = ({ cartItem: {name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
       <div className='image-container'>
            <img src={imageUrl} alt='item'/> 
       </div>
       <span className='name'>{name}</span>
       <span className='quantity'>{price}</span>
       <span className='price'>{quantity}</span>
       <span className='remove-button fa fa-remove'></span>
    </div>
)


export default index
