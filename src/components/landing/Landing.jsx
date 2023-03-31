import React from "react";

import './landing.css'

function Landing() {
  return (
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
  );
};

export default Landing;
