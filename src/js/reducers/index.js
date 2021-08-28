import { combineReducers } from "redux"
import menuReducer from "./menuReducer"
import navReducer from "./navReducer"

const allReducers = combineReducers({
  menuReducer,
  navReducer,
})

export default allReducers
