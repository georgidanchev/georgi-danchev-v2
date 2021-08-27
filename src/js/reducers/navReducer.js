import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from "../actions/types"

const initialState = {
  isMenuOpen: false,
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      }
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      }
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    default:
      return state
  }
}

export default navReducer
