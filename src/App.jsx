import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'


const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default App