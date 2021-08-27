import { SCROLL_UPDATE } from "../actions/types"

const initialState = {
  scroll: 0,
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_UPDATE:
      return {
        ...state,
        scroll: action.payload,
      }
    default:
      return state
  }
}

export default menuReducer
