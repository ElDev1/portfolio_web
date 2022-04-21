import React from 'react';
import './portfolio.css';
//import IMG from '../../assets/portfolioExample.jpg'
import { data } from './data';

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Mark</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, tecnologies, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_tecnologies'>
                      <div className='portfolio_tecnologies-elements'>
                        <p>{tecnologies}</p>
                      </div>
                </div>
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