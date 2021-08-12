import "../../styles/components/mobileBtn.scss"

const MobileBtn = () => {
  return (
    <button className="menu-btn">
      <div className="menu-btn__wrap">
        <div className="menu-btn__line menu-btn__line-1"></div>
        <div className="menu-btn__line menu-btn__line-2"></div>
        <div className="menu-btn__line menu-btn__line-3"></div>
      </div>
    </button>
  )
}

export default MobileBtn
