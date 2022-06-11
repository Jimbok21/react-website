import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BsGrid} from 'react-icons/bs'
import {GiBrain} from 'react-icons/gi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
     <nav>
       <a href='/#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
       <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
       <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiBrain/></a>
       <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsGrid/></a>
       <a href='#contact' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiOutlineMessage/></a>
     </nav>
  )
}

export default Nav