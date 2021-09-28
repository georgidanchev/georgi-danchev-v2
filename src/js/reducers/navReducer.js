import { CURRENT_SECTION, SECTION_IN_VIEW } from "../actions/types"

const initialState = {
  currentSection: "",
  sectionInView: "",
  // allSections: ["home", "about", "projects", "blog", "contact"],
  allSections: ["home", "about", "contact"],
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload,
      }
    case SECTION_IN_VIEW:
      return {
        ...state,
        sectionInView: action.payload,
      }
    default:
      return state
  }
}

export default menuReducer
