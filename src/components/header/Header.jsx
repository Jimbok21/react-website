import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/90s bg.jpg'
import HeaderSocials from './HeaderSocials'
import AKASH from '../../assets/Akash.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='akash'>
          <img src={AKASH} alt='akash'></img>
        </div>
        <h5>Hello I'm</h5>
        <h1>Jimmy Kells</h1>
        <h5>Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'> Go To Bottom</a>
      </div>
    </header>
  )
}

export default Header