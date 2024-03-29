import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>HTML & CSS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>React</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Flutter</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Node JS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>MySQL</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Python</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Django</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Java</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

