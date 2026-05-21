import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Menu.png'
import IMG2 from '../../assets/output.jpg'
import IMG3 from '../../assets/collectors.png'
import IMG4 from '../../assets/CASE.png'
import IMG5 from '../../assets/todo.png'
import IMG6 from '../../assets/github_users.png'
import IMG7 from '../../assets/CinemaMagic.png'
import IMG8 from '../../assets/inifap.png'
import IMG9 from '../../assets/autos.png'
import IMG10 from '../../assets/AiAgentsPlatform.png'

const data = [
  {
    id: 10,
    image: IMG10,
    title: 'Conversational AI Assistant (Google ADK)',
    description: 'An autonomous agent pipeline leveraging Google ADK and Gemini SDK, engineered to streamline multi-turn workflows and business-rule enforcement.',
    tags: ['Google ADK', 'Agentic AI', 'Gemini SDK', 'Python', 'FastAPI'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/ai_agents.md',
    demo: 'https://github.com/Alexlife2002003/public_documentation/blob/main/ai_agents_demo_instructions.md',
    featured: true
  },
  {
    id: 2,
    image: IMG2,
    title: 'Suicide Risk Assessment App',
    description: 'A high-impact clinical assessment app featuring secure patient tracking, custom PostgreSQL views, and automated score calculations.',
    tags: ['Flutter', 'Supabase', 'SQL Views', 'Automated Scoring'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/riesgo_suicida.md',
    demo: 'https://alexlife2002003.github.io/RiesgoSuicida-HTML/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CASE University Analytics System',
    description: 'An analytics questionnaire platform that aggregates university survey data into real-time metrics with visual chart insights.',
    tags: ['Flutter', 'Supabase', 'SQL Views', 'Real-time Analytics'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/case_usuario.md',
    demo: 'https://alexlife2002003.github.io/CASE-html/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Collectors Center Management',
    description: 'Enterprise resource application built according to strict ISO/IEC 29110 software standards for inventory lifecycle tracking.',
    tags: ['Flutter', 'Dart', 'ISO/IEC 29110 Standards'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/collection_center.md',
    demo: 'https://alexlife2002003.github.io/CollectionCenter/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'INIFAP Software Portal',
    description: 'An administrative hub linking multi-agency state software packages with optimized PHP APIs and database integration.',
    tags: ['Flutter', 'Dart', 'PHP APIs', 'MySQL'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/inifap.md',
    demo: 'https://alexlife2002003.github.io/html-projects/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Github Users Explorer',
    description: 'A high-speed developer search platform built with React, consuming Github\'s REST API and deployed on Google App Engine.',
    tags: ['React', 'REST APIs', 'App Engine Hosting'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/github_users_search.md',
    demo: 'https://githubusers-408922.wn.r.appspot.com/'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Restaurant Menu Website',
    description: 'An elegant, fluid web experience built with high-fidelity animations, responsive CSS grids, and interactive filtering.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/menu.md',
    demo: 'https://alexlife2002003.github.io/Menu/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Cinema Magic Analytics',
    description: 'An analytical dashboard demonstrating dynamic DOM updates and real-time visualization of film metrics.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Interactive Charts'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/cinemaMagic.md',
    demo: 'https://alexlife2002003.github.io/CinemaMagic/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Car Inventory Showcase',
    description: 'A high-performance car vendor showroom built using vanilla styles and fast Firebase static deployment.',
    tags: ['HTML', 'CSS', 'Firebase Hosting'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/car-vendor.md',
    demo: 'https://venta-autos-demo.web.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Minimalist To-do App',
    description: 'A clean productivity tool showcasing highly optimized local storage persistence and smooth UI transitions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    github: 'https://github.com/Alexlife2002003/public_documentation/blob/main/todo_list.md',
    demo: 'https://alexlife2002003.github.io/TODO-LIST/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, tags, github, demo, featured }) => {
          return (
            <article key={id} className={`portfolio_item glass-card ${featured ? 'portfolio_item-featured' : ''}`}>
              <div className="portfolio_item-image-wrapper">
                <img src={image} alt={title} className="portfolio_item-image" />
              </div>
              
              <div className="portfolio_item-content">
                <div className="portfolio_item-tags">
                  {tags && tags.map((tag, index) => (
                    <span className="project_tag" key={index}>{tag}</span>
                  ))}
                </div>
                
                <h3>{title}</h3>
                <p className="project_desc">{description}</p>
                
                <div className="portfolio_item-cta">
                  <a href={github} className='btn btn-github' target='_blank' rel="noreferrer">Code</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
