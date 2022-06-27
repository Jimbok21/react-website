import React from 'react'
import projects from './projects.css'
// import Modal from '../modal/Modal'
//imports the database of projects for the cards
import { data } from '../../assets/projects_data.js'
import { useState, useEffect } from 'react'

import Modal from "react-modal";


Modal.setAppElement("#root");

//javascript to turn data array into cards dynamically
const Projects = () => {

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  return (
    <>


      <section id='projects'>
        <div className='titles'>
          <h5>My Work</h5>
          <h2 theme={projects}>Projects</h2>
        </div>
        {/* <button onClick={() => { setIsOpen(true) }}>Trigger Modal</button> */}

        <div class="card-grid">
          {
            data.map(({ id, image, title, description, date, status, category, difficulty, pattern }) => {
              return (

                //add href to new page when theyre created
                // <div class="card" key={id} onClick={() => { setIsOpen(true); setID(id) }}>
                <>
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={500}
                  >
                    <div>My modal dialog.</div>
                    <button onClick={toggleModal}>Close modal</button>
                  </Modal>
                  <div class="card" key={id} onClick={() => { setIsOpen(true) }}>

                    <img src={image} alt={title} />
                    <div class={pattern}>
                      <div class="card-text">
                        <span class="date">{date}</span>
                        <h2>{title}</h2>
                        <p>{description}</p>
                      </div>
                    </div>
                    <div class="card-stats">
                      <div class="stat">
                        <div class="value">{status}</div>
                        <div class="type">status</div>
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
                </>
              )
            })

          }
        </div>
      </section>
    </>
  )
}

export default Projects