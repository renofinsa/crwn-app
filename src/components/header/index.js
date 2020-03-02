import React from 'react'
import { ReactComponent as Logo } from './../../assets/crown.svg'
import { auth } from './../../utils/firebase'

import { connect } from 'react-redux'
import CartIcon from './../cart-icon'
import CartDropdown from './../cart-dropdown'
import './index.scss'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from './../../redux/selector/cart'
import { selectCurrentUser } from './../../redux/selector/user'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './style'

const index = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()} >SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)
 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(index)
