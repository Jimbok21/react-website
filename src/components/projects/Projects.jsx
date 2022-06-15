import React from 'react'
import project from './projects.css'
import IMG1 from '../../assets/90s bg.jpg'
import IMG2 from '../../assets/90s bg.jpg'
import IMG3 from '../../assets/90s bg.jpg'
import IMG4 from '../../assets/90s bg.jpg'
import IMG5 from '../../assets/90s bg.jpg'

//data for each project
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    description: 'Description 1',
    date: '4 days ago',
    hours: 10,
    category: 'University',
    difficulty: 'Hard'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Project 2',
    description: 'Description 2',
    date: '4 days ago',
    hours: 10,
    category: 'University',
    difficulty: 'Hard'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Project 3',
    description: 'Description 3',
    date: '4 days ago',
    hours: 10,
    category: 'University',
    difficulty: 'Hard'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Project 4',
    description: 'Description 4',
    date: '4 days ago',
    hours: 10,
    category: 'University',
    difficulty: 'Hard'
  },
  {
    id: 1,
    image: IMG5,
    title: 'Project 5',
    description: 'Description 5',
    date: '4 days ago',
    hours: 10,
    category: 'University',
    difficulty: 'Hard'
  }
]

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