import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me5.png'
import HeaderSocials from './HeaderSocials'
import {TypeAnimation } from 'react-type-animation'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Alexia Hernandez</h1>
        <h5>I am a </h5>
        <h2 className='text-primary'><TypeAnimation sequence={['Web Developer',2000,'Software Engineer',2000]}
        speed={50}
        wrapper='span'
        repeat={Infinity} /></h2>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
