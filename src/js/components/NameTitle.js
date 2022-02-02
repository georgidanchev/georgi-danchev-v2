const NameTitle = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME } = process.env

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <a className="nameTitle" href="#home" onClick={scrollToTop} data-scroll-to>
      <h2 className="nameTitle__container">
        <span className="nameTitle__inner nameTitle__inner--first">{REACT_APP_FIRST_NAME}</span>
        <span className="nameTitle__inner nameTitle__inner--second"> {REACT_APP_LAST_NAME}</span>
      </h2>
    </a>
  )
}

export default NameTitle
