import { SCROLL_UPDATE } from "./types"

export const setCurrentSection = (scroll) => (dispatch) => {
  dispatch({
    type: SCROLL_UPDATE,
    payload: scroll,
  })
}
