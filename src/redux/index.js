import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './reducer/user'
import cartReducer from './reducer/cart'
import directoryReducer from './reducer/directory'
import shopReducer from './reducer/shop'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })