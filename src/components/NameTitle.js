import React from "react"
import "../styles/nameTitle.scss"

const NameTitle = () => {
  return (
    <h2 class="nameTitle">
      {process.env.REACT_APP_FIRST_NAME}
      <span className="nameTitle__inner"> {process.env.REACT_APP_LAST_NAME}</span>
    </h2>
  )
}

export default NameTitle
