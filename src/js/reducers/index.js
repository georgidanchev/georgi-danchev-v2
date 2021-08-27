import { combineReducers } from "redux"
import menuReducer from "./menuReducer"
import navReducer from "./navReducer"
import scrollReducer from "./scrollReducer"

const allReducers = combineReducers({
  menuReducer,
  navReducer,
  scrollReducer,
})

export default allReducers
