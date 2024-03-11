import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => (
  <div className="header-con">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website-logo"
        className="header-jobby-logo"
      />
    </div>
    <div>
      <AiFillHome className="logo" />
      <BsFillBriefcaseFill className="logo" />
      <FiLogOut className="logo" />
    </div>
  </div>
)

export default Header
