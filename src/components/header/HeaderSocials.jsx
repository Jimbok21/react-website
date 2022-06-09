import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a rel='noreferrer' href='https://www.linkedin.com/in/jimmy-kells-a22566237/' target="_blank"><BsLinkedin/></a>
        <a rel='noreferrer' href='https://github.com/Jimbok21' target="_blank"><BsGithub/></a>
        <a rel='noreferrer' href='https://www.fiverr.com/jimbok21' target="_blank"><SiFiverr/></a>
    </div>
  )
}

export default HeaderSocials