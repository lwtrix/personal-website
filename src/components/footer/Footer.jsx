import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <a href="#" className='icon'><GrLinkedin /></a>
        <a href="#" className='icon'><BsGithub /></a>
    </div>
  )
}

export default Footer