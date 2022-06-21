import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
        <a href="/#" className='footer__logo'>Jimbok21</a>
        <ul className='permalinks'>
            <li><a href="/#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a rel='noreferrer' href='https://www.linkedin.com/in/jimmy-kells-a22566237/' target="_blank" className='socials__icon'><BsLinkedin/></a>
        <a rel='noreferrer' href='https://github.com/Jimbok21' target="_blank" className='socials__icon'><BsGithub/></a>
        <a rel='noreferrer' href='https://www.fiverr.com/jimbok21' target="_blank" className='socials__icon'><SiFiverr/></a>
        </div>
    </footer>
  )
}

export default Footer