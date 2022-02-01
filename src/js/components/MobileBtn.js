import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../actions/menuActions"

const MobileBtn = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector((state) => state.menuReducer.isMenuOpen)

  return (
    <button className={isMenuOpen ? "menu-btn active" : "menu-btn"} onClick={() => dispatch(toggleMenu())} type="button">
      <div className="menu-btn__wrap">
        <div className="menu-btn__line menu-btn__line-1"></div>
        <div className="menu-btn__line menu-btn__line-2"></div>
        <div className="menu-btn__line menu-btn__line-3"></div>
      </div>
    </button>
  )
}

export default MobileBtn
