import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Build</h5>
      <h2>Services & Solutions</h2>

      <div className='container services_container'>
        <article className='service glass-card service_mobile'>
          <div className='service_head'>
            <h3>Mobile Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Architecting native-grade mobile apps using Flutter</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Designing fluid, gesture-driven user interfaces</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Optimizing offline storage and synchronous data states</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Integrating secure checkout, billing, and Stripe APIs</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Profiling rendering bottlenecks and boosting FPS</p>
            </li>
          </ul>
        </article>

        <article className='service glass-card service_web'>
          <div className='service_head'>
            <h3>Web & Full-Stack</h3>
          </div>
          <ul className='service_list'>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Building high-performance React frontends with TypeScript</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Developing scalable backends with Node.js, NestJS, and Python</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Designing low-latency RESTful and GraphQL APIs</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Structuring relational and non-relational database schemas</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Automating tests, coverage reporting, and CI/CD pipelines</p>
            </li>
          </ul>
        </article>

        <article className='service glass-card service_ai'>
          <div className='service_head'>
            <h3>Agentic AI Systems</h3>
          </div>
          <ul className='service_list'>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Orchestrating autonomous agents and multi-turn agent pipelines</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Integrating runtime tool calling and structured function parsing</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Harnessing Google Gemini and advanced LLM APIs</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Implementing reliable safety guardrails and validation rules</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Developing robust context retrieval and memory structures</p>
            </li>
          </ul>
        </article>

        <article className='service glass-card service_integration'>
          <div className='service_head'>
            <h3>Integrations</h3>
          </div>
          <ul className='service_list'>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Real-time synchronization via Supabase and WebSockets</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Multi-provider payment flows, billing logs, and webhooks</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Cross-device push notifications and background execution</p>
            </li>
            <li>
              <div className="service_icon-wrapper">
                <BiCheck className='service_list-icon' />
              </div>
              <p>Custom third-party SDK and external API orchestrations</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services