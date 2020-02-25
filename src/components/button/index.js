import React from 'react'

import './index.scss'

const index = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button 
        className={`${
            inverted ? '' : 'google-sign-in'} custom-button `
            } {...otherProps}
    >
        {children}
    </button>
)

export default index
