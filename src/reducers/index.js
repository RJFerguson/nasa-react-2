import { combineReducers } from 'redux';
import AppReducer from './app_reducer.js'

const rootReducer = combineReducers({
  astronomy: AppReducer

})

export default rootReducer; 