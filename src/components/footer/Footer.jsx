import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <a href="#home" className='footer_logo'>&lt;Alexia /&gt;</a>
        
        <ul className='permalinks'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/hernandezmtzalexia/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/Alexlife2002003" target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
        </div>
        
        <div className="footer_copyright">
          <small>&copy; 2026 Alexia Hernandez Martinez. Engineered with precision.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
