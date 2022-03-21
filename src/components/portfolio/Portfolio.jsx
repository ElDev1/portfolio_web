import React from 'react';
import './portfolio.css';
import IMG from '../../assets/portfolioExample.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },
  {
    id: 2,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },
  {
    id: 3,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },
  {
    id: 4,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },
  {
    id: 5,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },
  {
    id: 6,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  },  
  {
    id: 7,
    image: IMG,
    title: 'Bank Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Mark</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
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

export default Portfolio;