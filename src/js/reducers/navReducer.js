import { CURRENT_SECTION } from "../actions/types"

const initialState = {
  currentSection: "home",
  allSections: ["home", "about", "projects", "blog", "contact"],
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload,
      }
    default:
      return state
  }
}

export default menuReducer
