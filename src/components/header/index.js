import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/crown.svg'
import { auth } from './../../utils/firebase'

import { connect } from 'react-redux'
import CartIcon from './../cart-icon'
import CartDropdown from './../cart-dropdown'
import './index.scss'

const index = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)
 
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden,
})

export default connect(mapStateToProps)(index)
