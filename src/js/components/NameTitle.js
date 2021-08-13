import "../../styles/components/nameTitle.scss"

const NameTitle = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME } = process.env

  return (
    <h2 className="nameTitle">
      { REACT_APP_FIRST_NAME }
      <span className="nameTitle__inner"> { REACT_APP_LAST_NAME }</span>
    </h2>
  )
}

export default NameTitle
