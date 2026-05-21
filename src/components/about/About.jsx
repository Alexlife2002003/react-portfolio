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
          <div className="about_me-frame">
            <div className="about_me-image">
              <img src={ME} alt="Alexia Hernandez Martinez" />
            </div>
            <div className="about_me-glow"></div>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card glass-card'>
              <div className="about_card-icon-wrapper">
                <FaAward className='about_icon' />
              </div>
              <h5>Experience</h5>
              <small>2+ years building production software</small>
            </article>

            <article className='about_card glass-card'>
              <div className="about_card-icon-wrapper">
                <FiUsers className='about_icon' />
              </div>
              <h5>Focus</h5>
              <small>Mobile, Full-Stack, & Agentic AI</small>
            </article>

            <article className='about_card glass-card'>
              <div className="about_card-icon-wrapper">
                <VscFolderLibrary className='about_icon' />
              </div>
              <h5>Projects</h5>
              <small>End-to-end Mobile & AI Solutions</small>
            </article>
          </div>

          <div className="about_text-block">
            <p>
              I am a software engineer driven by the challenge of transforming complex logic into high-performance, 
              scalable production code. Whether it's architecting native-performance mobile apps or orchestrating 
              autonomous AI agents, I build with speed, precision, and user experience in mind.
            </p>

            <div className="about_bullets">
              <div className="about_bullet">
                <span className="bullet_emoji">🚀</span>
                <div>
                  <strong>Cross-Platform Mastery:</strong> Building native-performance, fluid iOS & Android apps using Flutter.
                </div>
              </div>
              <div className="about_bullet">
                <span className="bullet_emoji">🧠</span>
                <div>
                  <strong>Agentic AI Engineering:</strong> Creating intelligent systems that automate decision-making and scale business workflows.
                </div>
              </div>
              <div className="about_bullet">
                <span className="bullet_emoji">💻</span>
                <div>
                  <strong>Full-Stack Excellence:</strong> Engineering secure, optimized backends and web apps with TypeScript, Python, and SQL.
                </div>
              </div>
            </div>

            <p className="about_cta-text">
              I don't just write code — I architect complete, end-to-end systems that solve meaningful problems.
            </p>
          </div>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About