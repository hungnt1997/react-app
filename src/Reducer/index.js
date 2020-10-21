import { combineReducers } from 'redux'
import {loginReducer, logginStatusReducer} from "./login"

const allReducer = combineReducers({
  loginReducer,
  logginStatusReducer
})
export default allReducer

