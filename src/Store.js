import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import rootReducer from './reducers/index.js'

const Store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
)

export default Store; 