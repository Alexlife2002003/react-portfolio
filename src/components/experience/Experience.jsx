import React from 'react'
import './experience.css'
import { BsCalendar3 } from 'react-icons/bs'
import { BiBriefcase } from 'react-icons/bi'

const Experience = () => {
  const timelineData = [
    {
      role: 'Software Engineer',
      company: 'Merkuria',
      period: 'June 2024 – May 2026',
      details: [
        'Boosted transactional integrity for 3,000+ monthly users by optimizing Stripe checkout integration and resolving multi-layer system failures.',
        'Accelerated app speed and slashed UI friction by refactoring Flutter state management and bridging frontend–backend integration gaps.',
        'Streamlined real-time reservation flows, fixing complex data-synchronization lag across microservices.',
        'Engineered production-grade AI assistant pipelines, implementing robust conversation states and business-rule safety nets.',
        'Developed backend-driven state machine logic supporting autonomous, context-aware user workflows.'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Laboratorio de Software Libre Zacatecas',
      period: 'March 2024 – June 2024',
      details: [
        'Drove critical updates for high-traffic internal tools, noticeably refining both system efficiency and overall UX.',
        'Decimated production API bottlenecks through diligent debugging, isolation testing, and structured logs analysis.',
        'Orchestrated automated development and deployment workflows using Linux, Git, and Docker script integrations.',
        'Collaborated directly with core stakeholders to translate complex requirements into clean architectural features.'
      ]
    }
  ]

  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'SQL', 'HTML', 'CSS']
    },
    {
      category: 'Frameworks & Technologies',
      skills: ['Flutter', 'React', 'Node.js', 'NestJS', 'Express', 'Prisma', 'Supabase', 'PostgreSQL']
    },
    {
      category: 'Core Areas',
      skills: ['Full-Stack Development', 'Mobile Development', 'REST APIs', 'Database Design', 'Debugging', 'Testing', 'AI Assistants']
    },
    {
      category: 'Tools & Practices',
      skills: ['Git', 'Docker', 'Linux', 'Agile / Scrum']
    }
  ]

  return (
    <section id='experience'>
      <h5>My Journey & Capabilities</h5>
      <h2>Experience & Tech Stack</h2>

      <div className='container experience_container'>
        {/* ================= TIMELINE COLUMN ================= */}
        <div className='experience_left-timeline'>
          <h3 className="section_column-title">Work History</h3>
          <div className="timeline_flow">
            {timelineData.map((item, idx) => (
              <div className="timeline_item glass-card" key={idx}>
                <div className="timeline_icon-node">
                  <BiBriefcase />
                </div>
                <div className="timeline_header">
                  <div className="timeline_meta">
                    <h4>{item.role}</h4>
                    <span className="company_name">{item.company}</span>
                  </div>
                  <div className="timeline_date">
                    <BsCalendar3 className="date_icon" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <ul className="timeline_bullets">
                  {item.details.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SKILLS COLUMN ================= */}
        <div className='experience_right-skills'>
          <h3 className="section_column-title">Technical Expertise</h3>
          <div className="skills_categories-grid">
            {skillsData.map((cat, idx) => (
              <div className="skills_category-card glass-card" key={idx}>
                <h4>{cat.category}</h4>
                <div className="skills_chips-container">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="skill_chip" key={sIdx}>
                      <span className="skill_chip-dot"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
