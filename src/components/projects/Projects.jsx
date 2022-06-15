import React from 'react'
import project from './projects.css'

//imports the database of projects for the cards
import { data } from '../../assets/projects_data.js'


//javascript to turn data array into cards dynamically
const Projects = () => {
  return (
    <section id='projects'>
      <div className='titles'>
        <h5>Get to Know</h5>
        <h2 theme={project}>About Me</h2>
      </div>
      <div class="card-grid">
        {
          data.map(({ id, image, title, description, date, hours, category, difficulty }) => {
            return (
              //add href to new page when theyre created
              <div class="card" key={id}>
                <img src={image} alt={title}/>
                <div class="card-text">
                  <span class="date">{date}</span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div class="card-stats">
                  <div class="stat">
                    <div class="value">{hours}</div>
                    <div class="type">hours</div>
                  </div>
                  <div class="stat border">
                    <div class="value">{category}</div>
                    <div class="type">category</div>
                  </div>
                  <div class="stat">
                    <div class="value">{difficulty}</div>
                    <div class="type">difficulty</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects