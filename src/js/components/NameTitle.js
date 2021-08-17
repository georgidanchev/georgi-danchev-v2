const NameTitle = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME } = process.env

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <a href="#hero" onClick={scrollToTop}>
      <h2 className="nameTitle">
        {REACT_APP_FIRST_NAME}
        <span className="nameTitle__inner"> {REACT_APP_LAST_NAME}</span>
      </h2>
    </a>
  )
}

export default NameTitle
