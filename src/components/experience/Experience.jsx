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
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Bootstrap</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>React</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Flutter</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Tailwind</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Javascript</h4>
             </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend & AI Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Node JS</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>MySQL</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Python</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Django</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Java</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Agentic AI</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>LLMs & APIs</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>LangChain</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>Google Gemini & SDK</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>FastAPI</h4>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div><h4>WebSockets</h4>
             </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

