import "../../styles/components/mobileBtn.scss"

const MobileBtn = () => {
  const btnClick = (e) => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active")
    } else {
      e.target.classList.add("active")
    }
  }
  return (
    <button className="menu-btn" onClick={btnClick}>
      <div className="menu-btn__wrap">
        <div className="menu-btn__line menu-btn__line-1"></div>
        <div className="menu-btn__line menu-btn__line-2"></div>
        <div className="menu-btn__line menu-btn__line-3"></div>
      </div>
    </button>
  )
}

export default MobileBtn
