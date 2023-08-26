import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
/* eslint-disable import/first */

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>User-Centered Design Approach</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Responsive and Adaptive Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Collaborative Teamwork</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Iterative Design and Continuous Improvement</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Knowledge in front-end and back-end</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Knowledge of animations</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Server-Side Programming(Django)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Version Control System(git)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Client-Side Scripting and Frameworks(React)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Continuous Learning and Skill Improvement</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Create Website Protoypes</p>
            </li>
           
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Strategic Storytelling</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Clear Communication</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Visual Aesthetics</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Excellent Writing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Data Visualization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Continuous Learning</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
import './services.css'

export default Services
