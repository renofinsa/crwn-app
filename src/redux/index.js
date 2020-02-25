import { combineReducers } from 'redux'

import userReducer from './reducer/user'
import cartReducer from './reducer/cart'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})