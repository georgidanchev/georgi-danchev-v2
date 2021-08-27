import { combineReducers } from "redux"
import navReducer from "./navReducer"

const allReducers = combineReducers({
  navReducer,
})

export default allReducers
