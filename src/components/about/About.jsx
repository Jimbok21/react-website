import React from 'react'
import './about.css'
import ME from '../../assets/90s bg.jpg'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>First in Bsc Computer Science from Swansea University</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>First in Bsc Computer Science from Swansea University</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>First in Bsc Computer Science from Swansea University</small>
            </article>
          </div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in dignissim nisl, ut hendrerit sapien. Phasellus molestie elit et dolor eleifend rhoncus. Suspendisse ligula quam, fermentum nec sapien non, vehicula molestie augue. Vestibulum malesuada eu nibh quis porta. Vestibulum euismod est augue, ut porta nisi imperdiet vel. Suspendisse eros libero, eleifend nec tortor non, condimentum ultricies augue. Donec eros augue, gravida a interdum eu, molestie sit amet enim.</p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About