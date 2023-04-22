import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'

import './menu.css'

const Menu = ({showMenu, setMenu, toggleClose, scrollToLanding, scrollToPortfolio, scrollToAbout, scrollToContact}) => {
    const handleScroll = (scroll) => {
        setMenu(false)

        setTimeout(() => {
            scroll()
        }, 300)
    }

  return (
    <div className={`${showMenu ? "menu menu__open" : "menu"}`}>
        <AiOutlineClose className="icon" onClick={toggleClose} />
        <div className="links-list">
          <div className="link" onClick={() => handleScroll(scrollToLanding)}>Home</div>
          <div className="link" onClick={() => handleScroll(scrollToPortfolio)}>Portfolio</div>
          <div className="link" onClick={() => handleScroll(scrollToAbout)}>About</div>
          <div className="link" onClick={() => handleScroll(scrollToContact)}>Contact Me</div>
        </div>
        <div className="find-me-on">
          <span className="text">Find me on</span>
          <a className="icon-container" href='https://www.linkedin.com/in/david-nitu-b9a5a41b7/'>
            <GrLinkedin className="icon linkedin" />
          </a>
          <a className="icon-container" href='https://github.com/lwtrix'>
            <BsGithub className="icon github" />
          </a>
        </div>
        <div className="latest-project">
          <a href="https://txsports.netlify.app">
            <div className="top">
              <p className="title">My Latest Project</p>
              <FaLongArrowAltRight className="arrow-icon" />
            </div>
            <div className="text">
              Check out <span>TXSports</span>, my recent solo built project. It's a platform
              where gamers can sign up for tournaments once they've created or
              gathered up a team. Users can also register as
              organizers, allowing them to create events.
            </div>
          </a>
        </div>
      </div>
  )
}

export default Menu