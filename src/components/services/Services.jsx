import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Build</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Mobile Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Cross-platform mobile apps with Flutter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Responsive and user-focused interfaces</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>State management and UI flow improvements</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Payments, reservations, and customer-facing features</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Debugging and performance improvements</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web & Full-Stack Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Frontend development with React and JavaScript/TypeScript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Backend development with Node.js, Express, and Django</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>REST API integration and workflow logic</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Database-driven applications with SQL and PostgreSQL</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Prototyping, testing, and feature iteration</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>AI-Assisted Systems</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Conversational assistants and workflow-based interactions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Tool-driven responses using structured data sources</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Conversation flow design and business-rule enforcement</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Python-based validation and information processing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Testing and refining multi-step assistant behavior</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Integrations</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Supabase and real-time database integrations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stripe payment flows</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Push notifications and external service integrations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>API-based feature development across services</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services