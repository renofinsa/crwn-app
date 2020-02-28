import React from 'react'
import SripeCheckout from 'react-stripe-checkout'

import './index.scss'

const index = ({ price }) => {
    const priceForStripe = price * 10
    const publishableKey = 'pk_test_fULGjzXyo1HdJP0FvmHo0S6700EIZNahdk'

    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }

    return (
        <div>
            <SripeCheckout 
                label='Pay Now'
                name='CRWN Clothing Ltd'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/Cuz.svg'
                description={`Your total is ${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default index
