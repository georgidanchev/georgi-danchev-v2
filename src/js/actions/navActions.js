import { CURRENT_SECTION, SECTION_IN_VIEW } from "./types"

export const setCurrentSection = (slide) => (dispatch) => {
  dispatch({
    type: CURRENT_SECTION,
    payload: slide,
  })
}

export const setSectionInView = (slide) => (dispatch) => {
  dispatch({
    type: SECTION_IN_VIEW,
    payload: slide,
  })
}
