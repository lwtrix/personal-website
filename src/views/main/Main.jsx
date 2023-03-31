import React, { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";

import "./main.css";
import Menu from "../../components/menu/Menu";
import Landing from "../../components/landing/Landing";
import Portfolio from "../../components/portfolio/Portfolio";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Link from "react-scroll/modules/components/Link";

const Main = () => {
  const [showMenu, setShowMenu] = useState(false);
  const landing = useRef();
  const portfolio = useRef();
  const about = useRef();
  const contact = useRef();

  const toggleShow = () => {
    setShowMenu(true);
  };

  const toggleClose = () => {
    setShowMenu(false);
  };

  const scrollToLanding = () => {
    landing.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    portfolio.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Menu
        showMenu={showMenu}
        setMenu={setShowMenu}
        toggleClose={toggleClose}
        scrollToLanding={scrollToLanding}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToPortfolio={scrollToPortfolio}
      />
      <div className="main" ref={landing}>
        <div className="header">
          <div className="icon-container" onClick={toggleShow}>
            <BiMenu className="icon" />
          </div>
          <button onClick={scrollToPortfolio}>See Portfolio</button>
        </div>
        <Landing />
      </div>
      <Portfolio ref={portfolio} />
      <About ref={about}/>
      <Contact ref={contact}/>
      <Footer />
    </>
  );
};

export default Main;
