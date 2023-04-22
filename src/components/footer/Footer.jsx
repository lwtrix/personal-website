import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://www.linkedin.com/in/david-nitu-b9a5a41b7/" className='icon'><GrLinkedin /></a>
        <a href="https://github.com/lwtrix" className='icon'><BsGithub /></a>
    </div>
  )
}

export default Footer