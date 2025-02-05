import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>School Extracurricular Projects</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Mentor</h5>
              <small>+50 students helped</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ School Projects Completed</small>
            </article>
          </div>

          <p>
          Hi there! I'm Alexia Hernandez Martinez, a passionate software engineer
          with expertise in React, Flutter, and Django. I find joy in crafting dynamic 
          and responsive user interfaces using React, building cross-platform mobile 
          applications with Flutter, and developing powerful web applications using Django.
          My journey as a software engineer has been a continuous quest for learning and 
          growth. With each project I undertake, I embrace new challenges and use my 
          skills to create efficient and elegant solutions.
          Whether it's working on a solo project or collaborating with a team, 
          I thrive in environments that encourage creativity and innovation. 
          My goal is to contribute my knowledge and expertise to projects that make 
          a positive impact on people's lives.<br />
          Let's connect and explore how we can create exceptional experiences together!
          </p>
            
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
