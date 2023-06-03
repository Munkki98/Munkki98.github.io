import { HiMenu, HiOutlineX } from "react-icons/hi"
import classNames from "classnames"
import { useState } from "react"
import { Link } from "react-scroll"

function Header() {
  const [sidenavIsOpen, setSidenavOpen] = useState(false)
  const toggleSidenav = () => setSidenavOpen(!sidenavIsOpen)

  return (
    <>
      <nav>
        <button className="nav-menu-open" onClick={toggleSidenav}>
          <HiMenu size={40} />
        </button>

        <div className={classNames("nav-items", { "is-open": sidenavIsOpen })}>
          <button className="close-button" onClick={toggleSidenav}>
            <HiOutlineX size={30} />
          </button>
          <ul>
            <li>
              <Link to="profile" spy={true} smooth={true} offset={-100} onClick={toggleSidenav}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true} offset={-100} onClick={toggleSidenav}>
                Work Experience
              </Link>{" "}
            </li>
            <li>
              <Link to="education" spy={true} smooth={true} offset={-100} onClick={toggleSidenav}>
                Academic History
              </Link>{" "}
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={-100} onClick={toggleSidenav}>
                Professional Skills
              </Link>{" "}
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} onClick={toggleSidenav}>
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
