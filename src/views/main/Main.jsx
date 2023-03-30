import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./main.css";

const Main = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleShow = () => {
        setShowMenu(true)
    }

    const toggleClose = () => {
        setShowMenu(false)
    }

  return (
    <>
      <div className={`${showMenu ? 'menu menu__open' : 'menu'}`}>
        <AiOutlineClose className="icon" onClick={toggleClose}/>
        <div className="links-list">
          <div className="link">Home</div>
          <div className="link">Portfolio</div>
          <div className="link">About</div>
          <div className="link">Contact Me</div>
        </div>
        <div className="find-me-on">
          <span className="text">Find me on</span>
          <div className="icon-container">
            <GrLinkedin className="icon linkedin" />
          </div>
          <div className="icon-container">
            <BsGithub className="icon github" />
          </div>
        </div>
        <div className="latest-project">
          <a href="#">
            <div className="top">
              <p className="title">My Latest Project</p>
              <FaLongArrowAltRight className="arrow-icon" />
            </div>
            <div className="p">
              Check out TXSports, my recent solo built project. It provides
              users a platform where they can join game events once they've
              gathered up a team. Users can sign up as both players and
              organizers if they want to create game events.
            </div>
          </a>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="icon-container" onClick={toggleShow}>
            <BiMenu className="icon" />
          </div>
          <button>See Portfolio</button>
        </div>
        <section className="landing">
          <div className="left">
            <div className="text-container">
              <span className="name">David Nitu</span>
              <h2 className="title">Full-Stack Developer</h2>
              <span className="location">Birmimgham, UK</span>
            </div>
            <button className="download-cv">Download CV</button>
          </div>
          <div className="right">
            <img src="/images/visual.png" alt="Technologies" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
