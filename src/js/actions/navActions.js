import { CURRENT_SECTION } from "./types"

export const setCurrentSection = (slide) => (dispatch) => {
  dispatch({
    type: CURRENT_SECTION,
    payload: slide,
  })
}
