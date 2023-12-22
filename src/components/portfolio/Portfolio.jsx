import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Menu.png'
import IMG2 from '../../assets/output.jpg'
import IMG3 from  '../../assets/collectors.png'
import IMG4 from '../../assets/CASE.png'
import IMG5 from '../../assets/todo.png'
import IMG6 from '../../assets/github_users.png'
/* eslint-disable import/first */
const data=[
  {
    id:1,
    image: IMG1,
    title: 'Restuarant Menu',
    github:'https://github.com/Alexlife2002003/Menu',
    demo:'https://alexlife2002003.github.io/Menu/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Riesgo Suicida',
    github:'https://github.com/Alexlife2002003/RiesgoSuicida',
    demo:'https://alexlife2002003.github.io/RiesgoSuicida-HTML/',
    
  },
  {
    id:3,
    image: IMG3,
    title: 'Collectors Center',
    github:'https://github.com/Alexlife2002003/Collection_Center',
    demo:'https://alexlife2002003.github.io/CollectionCenter/',
    
  },
  {
    id:4,
    image: IMG4,
    title: 'CASE',
    github:'https://github.com/Alexlife2002003/CASE',
    demo:'https://alexlife2002003.github.io/CASE-html/',
    
  },
  {
    id:5,
    image: IMG5,
    title: 'To-do App',
    github:'https://github.com/Alexlife2002003/TODO-LIST',
    demo:'https://alexlife2002003.github.io/TODO-LIST/',
    
  },
  {
    id:6,
    image: IMG6,
    title: 'Github Users',
    github:'https://github.com/Alexlife2002003/github_users_search',
    demo:'https://githubusers-408922.wn.r.appspot.com/',
    
  },
  
  
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
          )
        })
       }
        
        
        
        
      </div>
    </section>
  )
}
import './portfolio.css'

export default Portfolio
