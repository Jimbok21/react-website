import React from 'react'
import project from './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='titles'>
        <h5>Get to Know</h5>
        <h2 theme={project}>About Me</h2>
      </div>
      <div class="card-grid">
        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Project One</h2>
            <p>This is the description</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">10</div>
              <div class="type">hours</div>
            </div>
            <div class="stat border">
              <div class="value">University</div>
              <div class="type">category</div>
            </div>
            <div class="stat">
              <div class="value">Hard</div>
              <div class="type">difficulty</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Project Two</h2>
            <p>This is the description</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">10</div>
              <div class="type">hours</div>
            </div>
            <div class="stat border">
              <div class="value">University</div>
              <div class="type">category</div>
            </div>
            <div class="stat">
              <div class="value">Hard</div>
              <div class="type">difficulty</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Project Three</h2>
            <p>This is the description</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">10</div>
              <div class="type">hours</div>
            </div>
            <div class="stat border">
              <div class="value">University</div>
              <div class="type">category</div>
            </div>
            <div class="stat">
              <div class="value">Hard</div>
              <div class="type">difficulty</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Project Four</h2>
            <p>This is the description</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">10</div>
              <div class="type">hours</div>
            </div>
            <div class="stat border">
              <div class="value">University</div>
              <div class="type">category</div>
            </div>
            <div class="stat">
              <div class="value">Hard</div>
              <div class="type">difficulty</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>Project Five</h2>
            <p>This is the description</p>
          </div>
          <div class="card-stats">
            <div class="stat">
              <div class="value">10</div>
              <div class="type">hours</div>
            </div>
            <div class="stat border">
              <div class="value">University</div>
              <div class="type">category</div>
            </div>
            <div class="stat">
              <div class="value">Hard</div>
              <div class="type">difficulty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects