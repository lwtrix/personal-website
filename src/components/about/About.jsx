import React, { forwardRef } from 'react'

import './about.css'

const About = ({}, ref) => {
  return (
    <div className='about' ref={ref}>
        <h2 className='section-heading'>About Me</h2>
        <div className="body">
            <div className="summary">
                <span className="label">Summary</span>
                <p className="text">I am originally from Romania but moved to UK in 2015. I first got interested in Web Development in 2017 and in 2019 I started learning on my own which led me to months of quitting and retrying until it slowly clicked with me and decided to join a full-stack intense bootcamp to push myself further. </p>
            </div>
            <div className="hobbies-interests">
                <span className="title">
                    Hobbies & Interests
                </span>
                <div className="list">
                    <span className='item'>MTB</span>
                    <span className='item'>Gaming</span>
                    <span className='item'>Coding</span>
                    <span className='item'>Music</span>
                    <span className='item'>Science</span>
                    <span className='item'>Books</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default forwardRef(About)