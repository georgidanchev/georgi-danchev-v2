import downArrow from "../../assets/down-arrow.svg"

const DownArrow = () => {
  return (
    <a className="down-arrow" href="#about">
      <img className="down-arrow__image" src={downArrow} alt="" />
    </a>
  )
}

export default DownArrow
