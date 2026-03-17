import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpeg'
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
              <small>Mobile, Full-Stack, and AI-assisted systems</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>Academic and personal projects in mobile, analytics, and AI</small>
            </article>
          </div>

          <p>
            Hi there! I’m Alexia Hernandez Martinez, a software engineer passionate
            about building mobile, web, backend, and AI-assisted systems. I enjoy
            creating cross-platform applications with Flutter, developing full-stack
            solutions with JavaScript, TypeScript, Python, and SQL, and solving real
            product problems through thoughtful engineering.
          </p>

          <p>
            My journey in software engineering has been driven by curiosity,
            continuous learning, and a love for building things that are both useful
            and well designed. With every project, I enjoy taking on new challenges,
            improving systems, and creating reliable solutions that make a real impact.
            Whether I’m working independently or collaborating with a team, I thrive
            in environments that value creativity, problem-solving, and innovation.
          </p>

          <p>
            My goal is to contribute to projects that improve people’s experiences
            and solve meaningful problems through technology. Let’s connect and build
            something great together.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About