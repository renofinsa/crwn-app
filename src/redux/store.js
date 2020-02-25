import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import indexReducer from './index'

const middlewares = [logger]

const store = createStore(indexReducer, applyMiddleware(...middlewares)
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store