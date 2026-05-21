import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <div className="header_content">
          <div className="badge_availability">
            <span className="badge_dot"></span>
            <span className="badge_text">Available for full-time & contracts</span>
          </div>
          
          <h5 className="intro_text">Hello, I'm</h5>
          <h1 className="name_title">Alexia Hernandez</h1>
          
          <div className="role_typing">
            <span className="role_prefix">I am a </span>
            <span className="role_text">
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2000,
                  'Full-Stack Developer', 2000,
                  'Flutter Specialist', 2000,
                  'Agentic AI Engineer', 2000
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </span>
          </div>
          
          <p className="hero_desc">
            I build high-performance full-stack applications, seamless cross-platform mobile experiences, 
            and advanced Agentic AI workflows that turn complex engineering problems into clean, high-impact products.
          </p>
          
          <CTA />
          
          <HeaderSocials />
        </div>
        

      </div>
    </header>
  )
}

export default Header