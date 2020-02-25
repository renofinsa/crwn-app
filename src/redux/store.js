import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import indexReducer from './index'

const middlewares = [logger]

export const store = createStore(indexReducer, applyMiddleware(...middlewares)
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)

export default { store, persistor }