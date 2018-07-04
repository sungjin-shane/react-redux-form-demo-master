import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {getItems} from './localDb'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  {items: getItems()},
  composeEnhancers(applyMiddleware(thunkMiddleware))
)
