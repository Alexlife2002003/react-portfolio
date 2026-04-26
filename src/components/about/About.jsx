import React from 'react'
import './about.css'
import ME from '../../assets/profile_pic.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Alexia Hernandez Martinez" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ year building production software</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Focus</h5>
              <small>Mobile, Full-Stack, and Agentic AI</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>Academic and personal projects in mobile, analytics, and AI</small>
            </article>
          </div>

          <p>
            Hi, I'm Alexia Hernandez Martinez — a software engineer who builds mobile, 
            web, backend, and agentic AI systems.
          </p>

          <p>
            I work with Flutter, JavaScript, TypeScript, Python, and SQL to create 
            cross-platform applications and full-stack solutions. Lately I've been 
            especially focused on agentic AI workflows — building systems that solve
            real product problems through thoughtful engineering.
          </p>

          <p>
            My goal is to contribute to projects that improve people's experiences 
            and solve meaningful problems through technology.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About