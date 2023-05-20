import React, { useRef, useState } from 'react'
import { Container } from 'reactstrap'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import classNames from 'classnames'
import Home from './Home'
// import SideBar from './components/SideBar'

function App() {
  const [sidenavIsOpen, setSidenavOpen] = useState(false)
  const toggleSidenav = () => setSidenavOpen(!sidenavIsOpen)

  const ref1 = useRef(),
    ref2 = useRef(),
    ref3 = useRef(),
    ref4 = useRef(),
    ref5 = useRef()
  const ref = useRef({ ref1, ref2, ref3, ref4, ref5 })

  const onRefClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const onSidenavRefClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    toggleSidenav()
  }

  return (
    <div>
      <nav className={classNames('sidenav', { 'is-open': sidenavIsOpen })}>
        <button className='close-button' onClick={toggleSidenav}>
          <HiOutlineX size={30} />
        </button>
        <button onClick={() => onSidenavRefClick(ref1)}>Personal Profile</button>
        <button onClick={() => onSidenavRefClick(ref3)}>Work Experience</button>
        <button onClick={() => onSidenavRefClick(ref2)}>Academic History</button>
        <button onClick={() => onSidenavRefClick(ref4)}>Skills</button>
        <button onClick={() => onSidenavRefClick(ref5)}>Contact</button>
      </nav>

      <nav className='topnav'>
        <Container>
          <button className='nav-menu-button' onClick={toggleSidenav}>
            <HiMenu size={40} />
          </button>
          <div className='nav-right'>
            <button onClick={() => onRefClick(ref1)}>Personal Profile</button>
            <button onClick={() => onRefClick(ref3)}>Work Experience</button>
            <button onClick={() => onRefClick(ref2)}>Academic History</button>
            <button onClick={() => onRefClick(ref4)}>Skills</button>
            <button onClick={() => onRefClick(ref5)}>Contact</button>
          </div>
        </Container>
      </nav>
      <Home ref={ref} />
    </div>
  )
}

export default App
