import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'
import { createStore } from 'redux'
import counterReducer from "./counter";
import logReducer from "./isLogged"
import logginReducer from "./login"
const allReducer = combineReducers({
  counter: counterReducer,
  log: logReducer,
  loggin : logginReducer,
  

})
export default allReducer

