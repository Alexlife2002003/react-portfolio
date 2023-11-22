import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Menu.png'
import IMG2 from '../../assets/output.jpg'
import IMG3 from '../../assets/collectors.png'
/* eslint-disable import/first */
const data=[
  {
    id:1,
    image: IMG1,
    title: 'Restuarant Menu',
    github:'https://github.com/Alexlife2002003/Menu',
    demo:'https://alexlife2002003.github.io/Menu/cd'
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
